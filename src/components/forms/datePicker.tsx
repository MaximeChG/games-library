import { FunctionComponent } from "react";
import classes from "./form.module.css";

interface datePickerProps {
    id: string,
    name: string,
    label: string,
    date?: Date
}

const FormDatePicker: FunctionComponent<datePickerProps> = ({id, name, label, date}) => {
    const currentDate = new Date().toLocaleDateString();

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formDatePicker} type="date" name={name} id={id} min="1970-01-01" max={currentDate}/>
    </div>
}

export default FormDatePicker;