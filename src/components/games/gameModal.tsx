'use client'
import { useState } from "react";
import classes from "./gameModal.module.css";
import Button from "../common/button/button";
import Row from "../common/row/row";
import Modal from "../common/modal/modalBackup";
import GameForm from "./gameForm";
import { LocalGame } from "@/types/common";
import Link from "next/link";

interface Props {
    game?: LocalGame
}

export default function GameModal({ game }: Props) {
    return <>
        <Link href={"/games?modal=true"}>Add Game</Link>
    </>
}