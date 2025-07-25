import { useState } from "react";
import classes from "../form.module.css";

interface Props {
    id: string,
    name: string,
    label: string,
    inputValue?: number,
}

export default function NumberInput({ id, name, label, inputValue = 1980 }: Props) {
    const [newValue, setValue] = useState(inputValue);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(Number(e.target.value));
    }

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formInput} type="number" name={name} id={id} min="1980" max="2070" value={newValue} onChange={onChange} />
    </div>
}