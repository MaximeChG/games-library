import classes from "./button.module.css";

interface Props {
    text: string,
    type: "reset" | "button" | "submit",
    onClickHandler?: () => void
    bordered: boolean
}

export default function Button({ text, type, onClickHandler, bordered}: Props) {
    let buttonClass = "notBorderered";

    if (bordered) {
        buttonClass = "bordered"
    }
    return <button
        className={`${classes.button} ${classes[buttonClass]}`}
        type={type}
        onClick={onClickHandler}
    >{text}
    </button>
}