"use client";
import classes from "./button.module.css";

interface Props {
    text: string,
    type: "reset" | "button" | "submit",
    onClickHandler?: () => void,
    buttonClass: string,
    state?: boolean
}

export default function Button({ text, type, onClickHandler, buttonClass, state = false}: Props) {
    return <button
        className={`${classes.button} ${buttonClass}`}
        type={type}
        onClick={onClickHandler}
        disabled={state}
    >{text}
    </button>
}