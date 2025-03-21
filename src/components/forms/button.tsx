'use client'

import { FunctionComponent } from "react";
import classes from "./form.module.css";

interface formButtonProps {
    text: string
    type: "submit" | "reset"
}

const FormButton: FunctionComponent<formButtonProps> = ({text}) => {
    return <button className={classes.formButton} type="submit">
        {text}
    </button>
}

export default FormButton;