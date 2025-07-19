import { useState } from "react";
import classes from "../form.module.css";


interface Props {
    label: string,
    name: string,
    id: string,
    list: {key: string, value: string}[]
    dropdownValue?: string
}

export default function Dropdown({label, name, id, list, dropdownValue = "Not Started"}: Props){
    const [newValue, setValue] = useState(dropdownValue);

    function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value);
    }
    
    return <div className={classes.container}>
        <label htmlFor={name}>{label}:</label>
        <select className={classes.formDropdown} name={name} id={id} value={newValue} onChange={onChange}>
            {list.map((listItem) => (
                <option key={listItem.key} value={listItem.key}>{listItem.value}</option>
            ))}
        </select>
    </div>
}