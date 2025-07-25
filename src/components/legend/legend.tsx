import LegendItem from './legendItem';
import classes from "./legend.module.css";
import { GameState } from '@/data/dropDownLists';

export default function LegendContaine(){
    return <ul className={classes.legend}>
            {GameState.map((item) => (
                <LegendItem key={item.key} progressClass={item.key} progressText={item.value} />
            ))}
        </ul>
}