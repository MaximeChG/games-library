import { LocalGame } from "@/types/common"
import Form from "../forms/form"
import Input from "../forms/common/input"
import { BLANKGAME } from "@/data/mockGames";
import CheckGroup from "../forms/common/checkGroup";
import { GameConsoles, GameState } from "@/data/dropDownLists";
import NumberInput from "../forms/common/number";
import Dropdown from "../forms/common/dropdown";
import TextArea from "../forms/common/textbox";
import Button from "../common/button/button";

interface Props {
    onSubmit: (e: any) => void,
    _game?: LocalGame,
    UpdateConsoles: (isChecked: boolean, _id: string) => void
}

export default function GameForm({onSubmit, _game, UpdateConsoles }: Props ) {
    const game: LocalGame = _game ? _game : BLANKGAME;
    
    return <Form onSubmit={onSubmit}>
        <Input label="Title" name="title" id="name" inputValue={game.title} />
        <Input label="Sort Title" name="sortTitle" id="sortTitle" inputValue={game.sortTitle} />
        <CheckGroup array={GameConsoles} arrayOfKeys={game.consoles} legendLabel="Select Consoles Availability" UpdateConsoles={UpdateConsoles} />
        <NumberInput label="Release Year" name="releaseYear" id="releaseYear" />
        <Dropdown label="Progress" name="progress" id="progress" list={GameState} dropdownValue={game.progress} />
        <TextArea label="Progress Description" name="progressDescription" id="progressDescription" textValue={game.progressDescription} />

        <Button type={"submit"} text="Submit" />
    </Form>
}