"use client"

import classes from "./form.module.css";
import Button from "./button";
import TextArea from "./textbox";
import Input from "./input";
import DropDown from "./dropdown";
import { GameState } from "@/data/dropDownLists";
import { FunctionComponent } from "react";
import { BLANKGAME } from "@/data/mockGames";
import Number from "./number";
import { LocalGame } from "@/types/common";
import { ArrayToString } from "@/hooks/util";

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
            <Input label="Consoles" name="consoles" id="consoles" inputValue={ArrayToString(game.consoles)}/>
            <Input label="Image" name="image" id="image" inputValue={game.image}/>
            <Number label="Release Year" name="releaseYear" id="releaseYear" />
            <DropDown label="Progress" name="progress" id="progress" list={GameState} dropdownValue={game.progress}/>
            <TextArea label="Progress Description" name="progressDescription" id="progressDescription"/>
        
            <Button type={"submit"} text="Submit"/>
        </form>
    )
     
}

export default GameForm;