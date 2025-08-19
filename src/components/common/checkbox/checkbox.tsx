import { useState } from "react";
import classes from "./checkbox.module.css";

interface Props {
    id: string,
    value: string,
    checked: boolean, 
    onChecked: (isChecked: boolean, _id: string) => void
}

export default function CheckBox ({id, value, checked = false, onChecked}: Props){
    const [isChecked, SetIsChecked] = useState<boolean>(checked);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        SetIsChecked(e.target.checked);
        onChecked(e.target.checked, id);
    }

    return <div className={classes.container}>
            
            <label>
                <input type="checkbox" name={id} checked={isChecked} value={id} onChange={onChange} className={classes.checkbox}/>
                {value}
            </label>
    </div>
}