
import { BLANKGAME } from "@/data/mockGames";
import { LocalGame } from "@/types/common";
import Form from "../common/form/form";
import Button from "../common/button/button";
import { FormEvent } from "react";
import Input from "../common/input/input";
import { GameConsoles, GameState } from "@/data/dropDownLists";
import CheckGroup from "../common/radiogroup/radiogroup";
import NumberInput from "../common/input/number";
import Dropdown from "../common/dropdown/dropdown";
import TextArea from "../common/input/textbox";
import { AddGame, UpdateGame } from "@/lib/gameActions";
import FormSubmitButton from "../common/form/formSubmitButton";

interface Props {
    isEditable: boolean,
    _game?: LocalGame,
    hideModal: () => void,
}

export default function GameForm({ isEditable, _game, hideModal }: Props) {
    const game: LocalGame = _game ? _game! : BLANKGAME;
    const consoles: string[] = isEditable ? game.consoles : [];

    function formSubmit(e: FormEvent) {
        e.preventDefault();

        const formData = e.target as typeof e.target & {
            title: {value: string};
            sortTitle: {value: string | null};
            releaseYear: {value: number};
            progress: {value: string};
            progressDescription: {value: string};
        };

        const gameInfo: LocalGame = {
            _id: isEditable ? game._id : undefined,
            title: formData.title.value,
            sortTitle: formData.sortTitle.value ? formData.sortTitle.value : formData.title.value,
            consoles: consoles,
            image: "https://someImage.com/image/image/image",
            releaseYear: formData.releaseYear.value,
            progress: formData.progress.value,
            progressDescription: formData.progressDescription.value,
            playedTimes: 0,
            addedDate: new Date()
        }


        isEditable ? UpdateGame(gameInfo, game._id!) : AddGame(gameInfo);
    }

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

    return <Form onFormSubmit={formSubmit}>
        <h1>{isEditable ? "Edit Game" : "Add Game"}</h1>
        <Input id={"title"} name={"title"} label={"Title"} isRequired={true} inputValue={game.title}/>
        <Input id={"sortTitle"} name={"sortTitle"} label={"Sort Title"} isRequired={false} inputValue={game.sortTitle}/>

        <CheckGroup array={GameConsoles} arrayOfKeys={consoles} legendLabel="Select Consoles Availability" UpdateConsoles={UpdateConsoles} />

        <NumberInput label="Release Year" name="releaseYear" id="releaseYear" inputValue={game.releaseYear}/>

        <Dropdown label="Progress" name="progress" id="progress" list={GameState} dropdownValue={game.progress} />
        <TextArea label="Progress Description" name="progressDescription" id="progressDescription" textValue={game.progressDescription} isRequired={true}/>

        <FormSubmitButton/>
        <Button text="Close" type="button" onClickHandler={hideModal} buttonClass={""} />
    </Form>
}