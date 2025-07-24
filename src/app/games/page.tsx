import Row from "@/components/common/row/row";
import AddGame from "@/components/games/addGame";
import { fetchGames } from "@/lib/gameActions";
import { LocalGame } from "@/types/common";

export default async function GamesPage() {

    const games: LocalGame[] = await fetchGames();


    return <>
        <Row>
            <AddGame />

            <Row>
                {games.map((game) => (
                    <Row key={game._id}><div>
                        <p>{game.title}</p>
                    </div></Row>
                ))}
            </Row>
        </Row>
    </>
}