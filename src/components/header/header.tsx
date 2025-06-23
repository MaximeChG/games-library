import { FunctionComponent } from "react";
import HeaderItem from "../header/headerItem";
import styles from "./header.module.css"

const HeaderContainer: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <HeaderItem text="Home" link="/"/>
                <HeaderItem text="Games" link="/games"/>
                <HeaderItem text ="List" link="/list" />
                <HeaderItem text="Reviews" link="/reviews"/>
                <HeaderItem text="Add Game" link="/games/game"/>
            </nav>
        </header>
    );
}

export default HeaderContainer;