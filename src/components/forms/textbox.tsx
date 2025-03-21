import { FunctionComponent } from "react";
import classes from "./form.module.css";

interface textboxProps {
    id: string,
    name: string,
    label: string,
    textValue?: string,
}

const FormTextbox: FunctionComponent<textboxProps> = ({id, name, label, textValue}) => {
    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <textarea className={classes.formTextbox} name={name} id={id}/>
    </div>
}

export default FormTextbox;