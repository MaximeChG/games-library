import { FunctionComponent } from "react";
import classes from "./form.module.css";

interface inputProps {
    id: string,
    name: string,
    label: string,
    inputValue?: string,
}

const FormInput: FunctionComponent<inputProps> = ({id, name, label, inputValue}) => {
    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="text" name={name} id={id}/>
    </div>
}

export default FormInput;