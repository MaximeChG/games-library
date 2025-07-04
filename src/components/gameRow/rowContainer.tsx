import { FunctionComponent, useState } from "react";
import styles from "./row.module.css";
import { LocalGame } from '../../types/common';
import Link from "next/link";
import { ArrayToString } from "@/hooks/util";
import { GameState } from "@/data/dropDownLists";

interface rowProps {
    game: LocalGame
}

const RowContainer: FunctionComponent<rowProps> = ({ game }) => {

    const addedDate = new Date(game.addedDate).toLocaleDateString();

    let consoleString: string = "";
    if (game.consoles){
        consoleString = ArrayToString(game.consoles);
    }

    const progress = GameState.entries();

    return <li className={`${styles.gameRow} ${styles[game.progress]}`}>
        <div className={styles.baseContainer}>
            {game.title && <p>{game.title}</p>}
            <p>{consoleString}</p>
            {game.addedDate && <p>{addedDate}</p>}
            <Link type="button" className={styles.button} href={`/games/game/${game._id}`}>Edit</Link>
        </div>      
    </li>
}

export default RowContainer;