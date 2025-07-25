import { useState } from "react";
import Row from "../row/row";


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
    
    return <Row>
        <label htmlFor={name}>{label}:</label>
        <select name={name} id={id} value={newValue} onChange={onChange}>
            {list.map((listItem) => (
                <option key={listItem.key} value={listItem.key}>{listItem.value}</option>
            ))}
        </select>
    </Row>
}