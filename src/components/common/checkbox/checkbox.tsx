import { useState } from "react";

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

    return <div>
            <input type="checkbox" name={id} checked={isChecked} value={id} onChange={onChange}/>
            <label>{value}</label>
    </div>
}