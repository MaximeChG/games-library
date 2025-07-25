import { useState } from "react";
import Row from "../row/row";

interface Props {
    id: string,
    name: string,
    label: string,
    textValue?: string,
    isRequired: boolean
}

export default function TextArea({id, name, label, textValue = '', isRequired}: Props){
    const [newValue, setValue] = useState(textValue);
    
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value);
    }
        
    return <Row>
        <label htmlFor={id}>{label}:</label>
        <textarea name={name} id={id} value={newValue} onChange={onChange} required={isRequired} />
    </Row>
}