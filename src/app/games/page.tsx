'use client'
import Button from "@/components/common/button/button";
import Modal from "@/components/common/modal/modal";
import Row from "@/components/common/row/row";
import { useState } from "react";

export default function GamesPage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    function HideModal(){
        setIsModalOpen(false);
    }

    function ShowModal(){
        setIsModalOpen(true);
    }

    return <>
    <Row>
        <h1>Games</h1>
        <Button text={"Add Game"} type={"button"} onClickHandler={ShowModal} bordered={false} />
    </Row>
    {isModalOpen ? <Modal onClose={HideModal} isOpen={isModalOpen}>
        <Row>
            <p>Add Game Form will go here</p>
            <Button text="Close" type="button" onClickHandler={HideModal} bordered={true}/>
        </Row>
    </Modal> : null}
    </>
}