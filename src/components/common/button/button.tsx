import classes from "./button.module.css";

interface Props {
    onClick?: () => void
    text: string
    type: "reset" | "button" | "submit"
}

export default function Button({onClick, text, type}: Props){
    return <button className={classes.button}type={type} onClick={onClick}>{text}</button>
}