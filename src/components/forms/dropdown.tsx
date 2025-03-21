import { FunctionComponent } from "react";
import classes from "./form.module.css";


interface dropdownProps {
    label: string,
    name: string,
    id: string,
    list: {key: string, value: string}[]
    dropdownValue?: string
}

const FormDropdown: FunctionComponent<dropdownProps> = ({label, name, id, list}) => {
    return <div className={classes.container}>
        <label htmlFor={name}>{label}:</label>
        <select className={classes.formDropdown} name={name} id={id}>
            {list.map((listItem) => (
                <option key={listItem.key} value={listItem.key}>{listItem.value}</option>
            ))}
        </select>
    </div>
}

export default FormDropdown