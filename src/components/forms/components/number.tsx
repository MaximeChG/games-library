import { FunctionComponent, useState } from "react";
import classes from "../form.module.css";

interface inputProps {
    id: string,
    name: string,
    label: string,
    inputValue?: number,
}

const FormNumber: FunctionComponent<inputProps> = ({id, name, label, inputValue = 1980}) => {
    const [newValue, setValue] = useState(inputValue);

    function onChange(e: any) {
        setValue(e.target.value);
    }

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="number" name={name} id={id} min="1980" max="2070" value={newValue} onChange={onChange}/>
    </div>
}

export default FormNumber;