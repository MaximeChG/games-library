import classes from "../form.module.css";

interface Props {
    id: string,
    name: string,
    label: string,
    date?: Date
}

export default function DatePicker ({id, name, label, date}: Props){
    const currentDate = new Date().toLocaleDateString();

    return <div className={classes.container}>
        <label htmlFor={id}>{label}:</label>
        <input className={classes.formDatePicker} type="date" name={name} id={id} min="1970-01-01" max={currentDate}/>
    </div>
}