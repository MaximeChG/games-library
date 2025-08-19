import CheckBox from "../checkbox/checkbox"
import classes from "./radiogroup.module.css";

interface Props {
    legendLabel: string
    array: { key: string, value: string }[],
    arrayOfKeys: string[],
    UpdateConsoles: (isChecked: boolean, _id: string) => void
}

export default function CheckGroup({ legendLabel, array, arrayOfKeys, UpdateConsoles }: Props) {

    return <div>
        <fieldset className={classes.group}>
            <legend>{legendLabel}</legend>
            {array.map((item) => (
                <CheckBox key={item.key} id={item.key} value={item.value} onChecked={UpdateConsoles} checked={arrayOfKeys?.includes(item.key) ? true : false} />
            ))}
        </fieldset>
    </div>
}