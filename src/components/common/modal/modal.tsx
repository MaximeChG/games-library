import React, { Children, FunctionComponent, PropsWithChildren } from "react";
import classes from "./modal.module.css";

interface Props {
    onClose: () => void,
    isOpen: boolean,
    children: React.ReactNode
}

const Modal = ({ onClose, isOpen = false, children }: Props) => {
    
    return <>
        <div className={classes.backdrop}/>
        <dialog className={classes.modal} onClose={onClose} open={isOpen}>
          {children}</dialog>
    </>
}

export default Modal;