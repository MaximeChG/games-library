import { FunctionComponent } from "react";
import classes from "./form.module.css";

interface inputProps {
    id: string,
    name: string,
    label: string,
    inputValue?: number | undefined,
}

const FormNumber: FunctionComponent<inputProps> = ({id, name, label, inputValue}) => {


    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="number" name={name} id={id} min="1980" max="2070" value={inputValue ? inputValue : 1980}/>
    </div>
}

export default FormNumber;