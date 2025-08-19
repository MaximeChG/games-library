"use client";
import classes from "./button.module.css";

interface Props {
    text: string,
    type: "reset" | "button" | "submit",
    onClickHandler?: () => void,
    buttonClass: string
}

export default function Button({ text, type, onClickHandler, buttonClass}: Props) {
    return <button
        className={`${classes.button} ${buttonClass}`}
        type={type}
        onClick={onClickHandler}
    >{text}
    </button>
}