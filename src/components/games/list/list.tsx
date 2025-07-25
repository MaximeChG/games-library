import Row from "@/components/common/row/row";
import RowContainer from "../gameRow/rowContainer";
import classes from "./list.module.css";
import { LocalGame } from "@/types/common";

interface Props {
    games: LocalGame[];
}

export default function List({ games }: Props) {

    return <Row>
        <ul className={classes.gamesList}>
            {games.map((game: LocalGame) => (
                <RowContainer key={game._id!.toString()} game={game} />
            ))}
        </ul>
    </Row>

}

List;