import Row from "../row/row";

interface Props {
    id: string,
    name: string,
    label: string,
    date?: Date
}

export default function DatePicker ({id, name, label, date}: Props){
    const currentDate = new Date().toLocaleDateString();

    return <Row>
        <label htmlFor={id}>{label}:</label>
        <input type="date" name={name} id={id} min="1970-01-01" max={currentDate}/>
    </Row>
}