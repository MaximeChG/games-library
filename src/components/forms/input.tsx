'use client'

import { FunctionComponent, useState } from "react";
import classes from "./form.module.css";

interface inputProps {
    id: string,
    name: string,
    label: string,
    inputValue?: string,
}

const FormInput: FunctionComponent<inputProps> = ({id, name, label, inputValue = ''}) => {
    const [newValue, setValue] = useState(inputValue);

    function onChange(e: any) {
        setValue(e.target.value);
    }

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="text" name={name} id={id} value={newValue} onChange={onChange}/>
    </div>
}

export default FormInput;