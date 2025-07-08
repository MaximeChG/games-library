"use client"

import classes from "./form.module.css";
import Button from "./common/button";
import TextArea from "./common/textbox";
import Input from "./common/input";
import DropDown from "./common/dropdown";
import { GameConsoles, GameState } from "@/data/dropDownLists";
import { FunctionComponent } from "react";
import { BLANKGAME } from "@/data/mockGames";
import Number from "./common/number";
import { LocalGame } from "@/types/common";
import CheckGroup from "./common/radiogroup";

interface GameProps {
    onSubmit: (e: any) => void,
    _game?: LocalGame
}

const GameForm: FunctionComponent<GameProps> = ({onSubmit, _game}) => {
    const game: LocalGame = _game ? _game : BLANKGAME;

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <Input label="Title" name="title" id="name" inputValue={game.title}/>
            <Input label="Sort Title" name="sortTitle" id="sortTitle" inputValue={game.sortTitle}/>
            <CheckGroup array={GameConsoles} legendLabel="Select Consoles Availability"/>
            <Input label="Image" name="image" id="image" inputValue={game.image}/>
            <Number label="Release Year" name="releaseYear" id="releaseYear" />
            <DropDown label="Progress" name="progress" id="progress" list={GameState} dropdownValue={game.progress}/>
            <TextArea label="Progress Description" name="progressDescription" id="progressDescription" textValue={game.progressDescription}/>
        
            <Button type={"submit"} text="Submit"/>
        </form>
    )
     
}

export default GameForm;