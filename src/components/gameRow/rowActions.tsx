import { FunctionComponent } from "react";
import styles from "./row.module.css";
import Link from "next/link";

interface ActionsProps {
    id: number,
}

const RowActions: FunctionComponent<ActionsProps> = ({id}) => {
    return (
        <>
            <div className={styles.lineBreak}>
            </div>
            <div className={styles.buttonsRow}>
                <button type="button" className={styles.button}>Details</button>
                <button type="button" className={styles.button}>Update Progress</button>
                <Link type="button" className={styles.button} href={`/game/${id}`}>Edit</Link>
            </div>
        </>
        
    )
}

export default RowActions;