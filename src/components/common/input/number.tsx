import { useState } from "react";
import Row from "../row/row";

interface Props {
    id: string,
    name: string,
    label: string,
    inputValue?: number,
}

export default function NumberInput({ id, name, label, inputValue}: Props) {
    const [newValue, setValue] = useState<number>(inputValue ? inputValue : 1980);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(Number(e.target.value));
    }

    return <Row>
        <label htmlFor={id}>{label}:</label>
        <input type="number" name={name} id={id} min="1980" max="2070" value={newValue} onChange={onChange} />
    </Row>
}