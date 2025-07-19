import classes from "./button.module.css";

interface Props {
    onClick: () => void
    text: string
}

export default function Button({onClick, text}: Props){
    return <button className={classes.button}type="button" onClick={onClick}>{text}</button>
}