import { FunctionComponent, useState } from "react";

interface Props {
    id: string,
    value: string,
    checked?: boolean
}

const FormCheckBox: FunctionComponent<Props> = ({id, value, checked = false}) => {
    const [isChecked, SetIsChecked] = useState<boolean>(checked);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        SetIsChecked(e.target.checked);
    }

    return <div>
            <input type="checkbox" name={id} checked={isChecked} value={id} onChange={onChange}/>
            <label>{value}</label>
    </div>
}

export default FormCheckBox;