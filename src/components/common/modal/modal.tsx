import { PropsWithChildren } from "react";
import classes from "./modal.module.css";

export default function Modal({children} : PropsWithChildren){
    return <>
        <div className={classes.backdrop}/>
        <dialog className={classes.modal}>
        {children}</dialog>
    </>
}