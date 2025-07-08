import { FunctionComponent } from "react";
import CheckBox from "./checkbox";

interface Props {
    legendLabel: string
    array: {key: string, value: string}[],
    arrayOfKeys?: {key: string, value: string}[],
}

const FormCheckGroup: FunctionComponent<Props> = ({legendLabel, array}) => {

    return <fieldset>
        <legend>{legendLabel}</legend>
        {array.map((item) => (
            <CheckBox key={item.key} id={item.key} value={item.value}/>
        ))}
    </fieldset>
}

export default FormCheckGroup;