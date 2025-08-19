"use client"
import styles from "./row.module.css";
import { LocalGame } from '../../../types/common';
import { ArrayToString, GetValueArrayByKey } from "@/hooks/util";
import { DeleteGame } from "@/lib/gameActions";
import { GameConsoles } from "@/data/dropDownLists";
import GameModal from "../gameModal";
import Button from "@/components/common/button/button";
import Link from "next/link";

interface rowProps {
    game: LocalGame
}

export default function RowContainer ({ game }: rowProps) {

    const addedDate = new Date(game.addedDate).toLocaleDateString();

    async function DeleteGameHandler(){
        await DeleteGame(game);
    }

    let consoleString: string = "";
    if (game.consoles.length > 0){
        const consoleKeyValueArray = GetValueArrayByKey(GameConsoles, game.consoles);
        
        consoleString = ArrayToString(consoleKeyValueArray);
    }

    return <li className={`${styles.gameRow} ${game.progress}`}>
        <div className={styles.baseContainer}>
            {game.title && <p>{game.title}</p>}
            <p>{consoleString}</p>
            {game.addedDate && <p>{addedDate}</p>}
            <Link href={`/games/${game._id}`}>View Game</Link>
            <GameModal isEditing={true} game={game}/>
            <Button text={"Delete"} type={"button"} buttonClass={`${game.progress}`} onClickHandler={(DeleteGameHandler)} />
        </div>      
    </li>
}