import Modal from "@/components/common/modal/modal";
import Row from "@/components/common/row/row";
import GameForm from "@/components/games/gameForm";
import GameModal from "@/components/games/gameModal";
import List from "@/components/games/list/list";
import LegendContaine from "@/components/legend/legend";
import { FetchGames } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";
import { Suspense } from "react";

export async function Games(){
    const games: LocalGame[] = await FetchGames();

    return <List games={games} />
}

export type Props = {
    searchParams: Record<string, string> | null | undefined;
}

export default async function GamesPage(props: Props) {
    const { searchParams } = await props;
    const showModal =  searchParams?.modal === 'true';
    console.log(showModal);
    return <>
        <Row>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}> 
                <LegendContaine />
                <GameModal isEditing={false} />
            </div>
        </Row>
        <Row>
            <Suspense fallback={
                <h3>Fetching Games...</h3>
            }>
                <Games />
            </Suspense>  
        </Row>
    </>
    {showModal && <Modal><GameForm isEditable={false}/></Modal>}
}