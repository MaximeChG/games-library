'use client'

import { LocalGame } from "@/types/common";
import classes from "./form.module.css";

import GameForm from "./form";
import { updateGame } from "@/lib/gameActions";

type Props = {
    game: LocalGame
};

const EditGameForm = ({ game }: Props) => {
    const consoles: string[] = game.consoles;

    // function to edit the consoles string
    function UpdateConsoles(isChecked: boolean, _id: string) {
        if (isChecked) {
            // Then we need to push the value of the checkbox to the console string
            consoles.push(_id);
        }
        else {
            // We need to find the index of the item
            const index = consoles.indexOf(_id);
            // Make sure index is found
            if (index > -1) {
                // Splice that index out of array
                consoles.splice(index, 1);
            }
        }
    }

    async function editCurrentGame(e: any) {
        e.preventDefault();

        const formData = e.target;

        const gameInfo: LocalGame = {
            _id: game._id,
            title: formData.title.value,
            sortTitle: formData.sortTitle.value,
            consoles: consoles,
            image: game.image,
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
        <GameForm _game={game} onSubmit={editCurrentGame} UpdateConsoles={UpdateConsoles} />
    </div>
}

export default EditGameForm;