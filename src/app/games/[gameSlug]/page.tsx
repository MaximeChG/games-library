import Button from "@/components/common/button/button";
import Modal from "@/components/common/modal/modal";
import GameForm from "@/components/games/gameForm";
import { FetchGame } from "@/lib/gameActions"
import { LocalGame } from "@/types/common";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { GameDetails } from "../../../components/games/gameDetails/gameDetails";

interface Props {
    params: Promise<any>;
    searchParams: Record<string, string> | null | undefined;
}



export default async function GameDetailsPage(props: Props) {
    const params = await props.params;
    const showModal = props.searchParams?.modal === 'true';

    const game: LocalGame = await FetchGame(params.gameSlug);

    return <main>
        <Suspense fallback={<h3>Fetching Game...</h3>}>
            <GameDetails game={game}/>
        </Suspense>

        {showModal && <Modal>{<GameForm isEditable={true} _game={game}/>}</Modal>}
        
    </main>
}