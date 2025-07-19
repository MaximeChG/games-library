import styles from "./legendItem.module.css";

interface itemProps {
    progressText: string,
    progressClass: string
}

export default function LegendItem({ progressText, progressClass }: itemProps) {
    return <li className={styles[progressClass]}>{progressText}</li>
}