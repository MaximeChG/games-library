'use client'

import { FunctionComponent, useState } from "react";
import styles from "./row.module.css";
import ExpandedContent from "./expandedContent";
import RowActions from "./rowActions";

interface rowProps {
    game: any
}

const RowContainer: FunctionComponent<rowProps> = ({ game }) => {
    const [expanded, setIsExpanded] = useState(false);

    // expand functionality
    function handleExpand() {
        setIsExpanded(!expanded);
    }

    return <li className={`${styles.gameRow} ${styles[game.progress]}`}>
        <div className={styles.baseContainer}>
            {game.image && <img className={styles.image} src={game.image} />}
            {game.title && <p>{game.title}</p>}
            {game.addedDate && <p>{game.addedDate.toDateString()}</p>}
            <p onClick={handleExpand}>Expand</p>
        </div>
        {expanded &&
            <ExpandedContent 
                consoles={game.consoles} 
                playedTimes={game.playedTimes} 
                progressDescription={game.progressDescription} 
                reviews={game.reviews} 
                sortTitle={game.sortTitle}
                releaseYear={game.releaseYear} />
        }
        <RowActions id={game.id}/>
        
    </li>
}

export default RowContainer;