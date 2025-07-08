import { FunctionComponent, useState } from "react";
import classes from "../form.module.css";

interface textboxProps {
    id: string,
    name: string,
    label: string,
    textValue?: string,
}

const FormTextbox: FunctionComponent<textboxProps> = ({id, name, label, textValue = ''}) => {
    const [newValue, setValue] = useState(textValue);
    
    function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value);
    }
        
    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <textarea className={classes.formTextbox} name={name} id={id} value={newValue} onChange={onChange}/>
    </div>
}

export default FormTextbox;