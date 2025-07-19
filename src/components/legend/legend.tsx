import { FunctionComponent } from 'react';
import { GameState } from '../../../data/dropDownLists';
import LegendItem from './legendItem';
import classes from "./legend.module.css";

const LegendContainer: FunctionComponent = () => {
    return <div className={classes.legendContainer}>
        <ul className={classes.legend}>
            {GameState.map((item) => (
                <LegendItem key={item.key} progressClass={item.key} progressText={item.value} />
            ))}
        </ul>
    </div>
}

export default LegendContainer;