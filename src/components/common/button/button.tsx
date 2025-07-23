import classes from "./button.module.css";

interface Props {
    text: string,
    type: "reset" | "button" | "submit",
    onClickHandler: () => void
}

export default function Button({ text, type, onClickHandler }: Props){
    return <button className={classes.button}type={type} onClick={onClickHandler}>{text}</button>
}