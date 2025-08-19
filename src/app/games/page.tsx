import Row from "@/components/common/row/row";
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

export default function GamesPage() {
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
}