import Row from "@/components/common/row/row";
import GameModal from "@/components/games/GameModal";
import LegendContaine from "@/components/legend/legend";
import { fetchGames } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";

export default async function GamesPage() {

    const games: LocalGame[] = await fetchGames();


    return <>
        <Row>
            <LegendContaine />
            <GameModal isEditing={false}/>
        </Row>
        <Row>
            {games.map((game) => (
                <Row key={game._id}><div>
                    <p>{game.title}</p>
                    <GameModal isEditing={true} game={game}/>
                </div></Row>
            ))}
        </Row>
    </>
}