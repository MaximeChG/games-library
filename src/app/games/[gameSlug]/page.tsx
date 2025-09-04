import Button from "@/components/common/button/button";
import Modal from "@/components/common/modal/modal";
import GameForm from "@/components/games/gameForm";
import { FetchGame } from "@/lib/gameActions"
import { LocalGame } from "@/types/common";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
    params: Promise<any>;
    searchParams: Record<string, string> | null | undefined;
}

interface GameProps {
    game: LocalGame
}

export async function GameDetails({game} : GameProps){
    

    return <main>
        <h3>{game.title}</h3>
        <Link href={`/games/${game._id}?modal=true`}><Button text={"Edit Game"} type={"button"} buttonClass={"bordered"} /></Link>
    </main>
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