"use client";
import { LocalGame } from "@/types/common";
import classes from "./form.module.css";

import GameForm from "./gameForm";
import { addGame } from "@/lib/gameActions";

interface formProps {

}

const AddGameForm = () => {

    async function saveGame(e: any) {
        e.preventDefault();

        const formData = e.target;

        const newGame: LocalGame = {
            title: formData.title.value,
            sortTitle: formData.sortTitle.value,
            consoles: formData.consoles.value,
            image: formData.image.value,
            releaseYear: formData.releaseYear.value,
            progress: formData.progress.value,
            progressDescription: formData.progressDescription.value,
            playedTimes: 0,
            addedDate: new Date()
        }

        await addGame(newGame);
    }

    return <div className={classes.container}>
        <h1 className={classes.h1}>Add Game</h1>
        <GameForm onSubmit={saveGame} />
    </div>
}

export default AddGameForm;