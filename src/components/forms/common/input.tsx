import { useState } from "react";
import classes from "../form.module.css";

interface Props {
    id: string,
    name: string,
    label: string,
    inputValue?: string,
}

export default function Input({id, name, label, inputValue = ''}: Props) {
    const [newValue, setValue] = useState(inputValue);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="text" name={name} id={id} value={newValue} onChange={onChange}/>
    </div>
}