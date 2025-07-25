'use client';
import styles from "./row.module.css";
import { LocalGame } from '../../../types/common';
import Link from "next/link";
import { ArrayToString, GetValueArrayByKey } from "@/hooks/util";
import { deleteGame } from "@/lib/gameActions";
import { GameConsoles } from "@/data/dropDownLists";
import GameModal from "../gameModal";
import Button from "@/components/common/button/button";

interface rowProps {
    game: LocalGame
}

export default function RowContainer ({ game }: rowProps) {

    const addedDate = new Date(game.addedDate).toLocaleDateString();

    async function DeleteGame(){
        await deleteGame(game);
    }

    console.log(game.consoles);
    let consoleString: string = "";
    if (game.consoles){
        const consoleKeyValueArray = GetValueArrayByKey(GameConsoles, game.consoles);
        
        consoleString = ArrayToString(consoleKeyValueArray);
    }

    return <li className={`${styles.gameRow} ${game.progress}`}>
        <div className={styles.baseContainer}>
            {game.title && <p>{game.title}</p>}
            <p>{consoleString}</p>
            {game.addedDate && <p>{addedDate}</p>}
            <Button text={"Delete"} type={"button"} buttonClass={`${game.progress}`} onClickHandler={DeleteGame} />
            <GameModal isEditing={true} game={game}/>
        </div>      
    </li>
}