import { FunctionComponent } from "react";

interface rowProps {
    label: string,
    item: string,
}

const RowItem: FunctionComponent<rowProps> = ({label, item}) => {
    return <div>
            <label htmlFor="item">{label}: </label>
            <p id={item}>{item}</p>
    </div>
}

export default RowItem;