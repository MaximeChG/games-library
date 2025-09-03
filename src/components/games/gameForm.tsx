"use client";
import classes from "./gameForm.module.css";
import { BLANKGAME } from "@/data/mockGames";
import { LocalGame } from "@/types/common";
import Form from "../common/form/form";
import Button from "../common/button/button";
import { useRef } from "react";
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
}

export default function GameForm({ isEditable, _game }: Props) {
    const game: LocalGame = _game ? _game! : BLANKGAME;
    const consoleRef = useRef<HTMLInputElement>(null);
    const consoles = isEditable ? game.consoles : [];

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
        consoleRef.current!.value = consoles.toString();
    }


    return <Form onFormSubmit={isEditable ? UpdateGame : AddGame}>
        <h1>{isEditable ? "Edit Game" : "Add Game"}</h1>
        <input type="text" name="id" hidden value={isEditable ? game._id : ""} readOnly />

        <div className={classes.gameInfoContainer}>
            <Input id={"title"} name={"title"} label={"Title"} isRequired={true} inputValue={game.title} />
            <Input id={"sortTitle"} name={"sortTitle"} label={"Sort Title"} isRequired={false} inputValue={game.sortTitle} />
            <NumberInput label="Release Year" name="releaseYear" id="releaseYear" inputValue={game.releaseYear} />
        </div>

        <CheckGroup array={GameConsoles} arrayOfKeys={consoles} legendLabel="Select Consoles Availability" UpdateConsoles={UpdateConsoles} />
        <input type="text" id="consoleString" name="consoleString" ref={consoleRef} defaultValue={consoles.toString()} readOnly hidden />

        <div className={classes.progressContainer}>
            <Dropdown label="Progress" name="progress" id="progress" list={GameState} dropdownValue={game.progress} />
            <TextArea label="Progress Description" name="progressDescription" id="progressDescription" textValue={game.progressDescription} isRequired={true} />
        </div>

        <FormSubmitButton />
    </Form>
}