'use client'
import Modal from "@/components/modal/modal";
import classes from "./addGame.module.css";
import { useState } from "react";
import { LocalGame } from "@/types/common";
import { addGame } from "@/lib/gameActions";
import Button from "@/components/common/button/button";
import GameForm from "../gameForm";

interface Props {

}

export default function AddGame(){
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const consoles: string[] = [];

    function onModalClose() {
        setIsModalOpen(false);
    }

    function openModal(){
        setIsModalOpen(true);
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

    async function saveGame(e: any) {
        e.preventDefault();

        const formData = e.target;

        const newGame: LocalGame = {
            title: formData.title.value,
            sortTitle: formData.sortTitle.value,
            consoles: consoles,
            image: "https://someImage.com/image/image/image",
            releaseYear: formData.releaseYear.value,
            progress: formData.progress.value,
            progressDescription: "No Progress",
            playedTimes: 0,
            addedDate: new Date()
        }
        setIsModalOpen(false);
        await addGame(newGame);
    }


    return <>
        <Button type="button" text="Add Game" onClick={openModal}/>
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
            <GameForm onSubmit={saveGame} UpdateConsoles={UpdateConsoles}/>
        </Modal>
    </>
}