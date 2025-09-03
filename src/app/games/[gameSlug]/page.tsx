import { FetchGame } from "@/lib/gameActions"
import { LocalGame } from "@/types/common";
import { Suspense } from "react";

interface Props {
    params: Promise<any>
}

interface GameProps {
    id: string
}

export async function Game({id} : GameProps){
    const game: LocalGame = await FetchGame(id);

    return <main>
        <h3>{game.title}</h3>
    </main>
} 

export default async function GameDetailsPage(props: Props) {
    const params = await props.params;

    return <main>
        <Suspense fallback={<h3>Fetching Game...</h3>}>
            <Game id={ await params.gameSlug}/>
        </Suspense>
        
    </main>
}