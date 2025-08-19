'use client'
import { useState } from "react";
import classes from "./gameModal.module.css";
import Button from "../common/button/button";
import Row from "../common/row/row";
import Modal from "../common/modal/modal";
import GameForm from "./gameForm";
import { LocalGame } from "@/types/common";

interface Props {
    isEditing: boolean,
    game?: LocalGame
}

export default function GameModal({ isEditing, game }: Props) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function HideModal() {
        setIsModalOpen(false);
    }

    function ShowModal() {
        setIsModalOpen(true);
    }

    return <>
        <Button
            text={isEditing ? "Edit Game" : "Add Game"}
            type={"button"}
            onClickHandler={ShowModal}
            buttonClass={isEditing ? `notBordered${game?.progress}` : `${classes.bordered}`} />
        <div>
            {isModalOpen && <Modal onClose={HideModal} isOpen={isModalOpen}>
                <Row>
                    <GameForm isEditable={isEditing} hideModal={HideModal} _game={game} />
                </Row>
            </Modal>}
        </div>


    </>
}