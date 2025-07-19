import { FunctionComponent } from "react";
import HeaderItem from "./headerItem";
import styles from "./header.module.css"

export default function HeaderContainer(){
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <HeaderItem text="Home" link="/"/>
                <HeaderItem text="Games" link="/games"/>
                <HeaderItem text ="List" link="/list" />
                <HeaderItem text="Reviews" link="/reviews"/>
            </nav>
        </header>
    );
}