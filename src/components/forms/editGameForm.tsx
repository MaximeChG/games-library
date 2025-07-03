'use client'

import { LocalGame } from "@/types/common";
import classes from "./form.module.css";

import GameForm from "./gameForm";
import { updateGame } from "@/lib/gameActions";

type Props = {
    game: LocalGame
};

const EditGameForm = ({game}: Props) => {

    async function editCurrentGame(e: any) {
        e.preventDefault();

        const formData = e.target;

        const gameInfo: LocalGame = {
            _id: game._id,
            title: formData.title.value,
            sortTitle: formData.sortTitle.value,
            consoles: formData.consoles.value,
            image: formData.image.value,
            releaseYear: formData.releaseYear.value,
            progress: formData.progress.value,
            progressDescription: formData.progressDescription.value,
            playedTimes: game.playedTimes,
            addedDate: game.addedDate
        }
        await updateGame(gameInfo);
    }

    return <div className={classes.container}>
        <h1 className={classes.h1}>Edit Game</h1>
        <GameForm _game={game} onSubmit={editCurrentGame} />
    </div>
}

export default EditGameForm;