import Link from "next/link"
import { LocalGame } from "../../../types/common"
import Button from "../../common/button/button"

interface GameProps {
    game: LocalGame
}

export async function GameDetails({ game }: GameProps) {


    return <main>
        <h3>{game.title}</h3>
        <Link href={`/games/${game._id}?modal=true`}><Button text={"Edit Game"} type={"button"} buttonClass={"bordered"} /></Link>
    </main>
} 