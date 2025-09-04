'use client'
import { useState } from "react";
import classes from "./gameModal.module.css";
import Button from "../common/button/button";
import { LocalGame } from "@/types/common";
import Link from "next/link";

interface Props {
    game?: LocalGame
    isEditing: boolean
}

export default function GameModal({ game, isEditing }: Props) {
    return <>
        <Link href={"/games?modal=true"}><Button text={isEditing ? "Edit Game" : "Add Game"} type={"button"} buttonClass={"bordered"} /></Link>
    </>
}