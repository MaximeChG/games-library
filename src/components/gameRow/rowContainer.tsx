'use client'

import { FunctionComponent, useState } from "react";
import styles from "./row.module.css";
import ExpandedContent from "./expandedContent";
import RowActions from "./rowActions";
import { LocalGame } from '../../types/common';

interface rowProps {
    game: LocalGame
}

const RowContainer: FunctionComponent<rowProps> = ({ game }) => {
    const [expanded, setIsExpanded] = useState(false);

    // expand functionality
    function handleExpand() {
        setIsExpanded(!expanded);
    }

    const addedDate = new Date(game.addedDate).toLocaleDateString();
    return <li className={`${styles.gameRow} ${styles[game.progress]}`}>
        <div className={styles.baseContainer}>
            {game.title && <p>{game.title}</p>}
            {game.addedDate && <p>{addedDate}</p>}
            <p onClick={handleExpand}>Expand</p>
        </div>
        {expanded &&
            <ExpandedContent 
                consoles={game.consoles} 
                playedTimes={game.playedTimes} 
                progressDescription={game.progressDescription} 
                sortTitle={game.sortTitle}
                releaseYear={game.releaseYear} />
        }
        <RowActions id={game._id!}/>
        
    </li>
}

export default RowContainer;