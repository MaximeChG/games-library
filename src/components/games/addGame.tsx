'use client'
import classes from "./addGame.module.css";
import { useState } from "react";
import Button from "../common/button/button";
import Row from "../common/row/row";
import Modal from "../common/modal/modal";

export default function AddGame() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function HideModal() {
        setIsModalOpen(false);
    }

    function ShowModal() {
        setIsModalOpen(true);
    }
    return <>
        <div className={classes.addGameButton}>
            <Button text={"Add Game"} type={"button"} onClickHandler={ShowModal} bordered={false} />
        </div>
        {isModalOpen && <Modal onClose={HideModal} isOpen={isModalOpen}>
            <Row>
                <p>Add Game Form will go here</p>
                <Button text="Close" type="button" onClickHandler={HideModal} bordered={true} />
            </Row>
        </Modal>}
    </>
}