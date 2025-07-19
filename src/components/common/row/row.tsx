import classes from "./row.module.css";

interface Props {
    children: React.ReactNode
}
export default function Row({children}: Props){
    return <div className={classes.row}>{children}</div>
}