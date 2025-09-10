import Link from "next/link"
import { LocalGame } from "../../../types/common"
import classes from "./gameDetails.module.css";


interface GameProps {
    game: LocalGame
}

export async function GameDetails({ game }: GameProps) {


    return <div className={classes.container}>
        <div className={classes.group}>
            <label>Image: </label>
            <p>{game.image}</p>
        </div>
        <div>
            <label>Title: </label>
            <p>{game.title}</p>
        </div>
        <div>
            <label>Sort Title: </label>
            <p>{game.sortTitle}</p>
        </div>
        <div>
            <label>Consoles: </label>
            <p>{game.consoles}</p>
        </div>
        <div>
            <label>Progress: </label>
            <p>{game.progress}</p>
        </div>
        <div>
            <label>Progress Description: </label>
            <p>{game.progressDescription}</p>
        </div>
        <div>
            <label>Interest: </label>
            <p>{game.interest}</p>
        </div>
        <div>
            <label>Times Played: </label>
            <p>{game.playedTimes}</p>
        </div>
        <div>
            <label>Release Year: </label>
            <p>{game.releaseYear}</p>
        </div>
        <div>
            <label>Date Added: </label>
            <p>{game.addedDate.toString()}</p>
        </div>
    </div>
} 