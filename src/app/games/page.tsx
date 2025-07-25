import Row from "@/components/common/row/row";
import GameModal from "@/components/games/gameModal";
import List from "@/components/games/list/list";
import LegendContaine from "@/components/legend/legend";
import { fetchGames } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";

export default async function GamesPage() {

    const games: LocalGame[] = await fetchGames();


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
            <List games={games} />
        </Row>
    </>
}