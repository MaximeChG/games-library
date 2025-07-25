import { useState } from "react";
import Row from "../row/row";

interface Props {
    id: string,
    name: string,
    label: string,
    inputValue?: string,
    isRequired: boolean
}

export default function Input({id, name, label, inputValue = '', isRequired}: Props) {
    const [newValue, setValue] = useState(inputValue);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return <Row>
        <label htmlFor={id}>{label}:</label>
        <input type="text" name={name} id={id} value={newValue} onChange={onChange} required={isRequired}/>
    </Row>
}