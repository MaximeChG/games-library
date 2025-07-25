import styles from "./row.module.css";
import { FunctionComponent } from "react";
import RowItem from './rowItem';
import { ArrayToString } from "@/hooks/util";

interface ExpandedProps {
    consoles: (string)[],
    playedTimes: number | undefined,
    progressDescription: string | null | undefined,
    sortTitle: string | null | undefined, 
    releaseYear: number | null | undefined
}
const ExpandedContent: FunctionComponent<ExpandedProps> = ({consoles, playedTimes, progressDescription, sortTitle, releaseYear }) => {

    if (!playedTimes) {
        playedTimes = 0;
    }

    let consoleString: string = "";
    if (consoles){
        consoleString = ArrayToString(consoles);
    }
    

    return <>
        <div className={styles.expandedContainer}>
            {consoles && <RowItem label="Consoles" item={consoleString}/>}
            {playedTimes > 0 && <RowItem label="Played Times" item={playedTimes.toString()} />}
            {progressDescription && <RowItem label="Progress Description" item={progressDescription}/>}
            {sortTitle && <RowItem label="Sort Name" item={sortTitle} />}
            {releaseYear && <RowItem label="Release Year" item={releaseYear.toString()} />}
        </div>
        <div className={styles.updates}>
            <p>Most recent change will go Here</p>
        </div>

    </>
}

export default ExpandedContent;

