import { FunctionComponent } from "react";
import classes from "./searchGame.module.css";
import Link from "next/link";

const SearchGameContainer: FunctionComponent = () => {
    return (
        <div className={classes.searchGames}>
            <label>Search:</label>
            <input />
        </div>
    )
}

export default SearchGameContainer;