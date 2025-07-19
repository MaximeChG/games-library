import classes from "./searchGame.module.css";

interface Props {
 label: string
}

export default function Search({label}: Props) {
    return <>
        <div className={classes.searchDiv}>
            <label htmlFor="search">{label}</label>
            <input className={classes.searchInput} name="search" id="search"/>
        </div>
    </>
}