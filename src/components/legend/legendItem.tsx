import { FunctionComponent } from "react";
import styles from "./legendItem.module.css";

interface itemProps {
    progressText: string,
    progressClass: string
}

const LegendItem: FunctionComponent<itemProps> = ({progressText, progressClass}) => {
    return <li className={styles[progressClass]}>{progressText}</li>
}

export default LegendItem;