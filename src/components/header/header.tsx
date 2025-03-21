import { FunctionComponent } from "react";
import HeaderItem from "../header/headerItem";
import styles from "./header.module.css"

const HeaderContainer: FunctionComponent = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <HeaderItem text="Games" link="/"/>
                <HeaderItem text ="List" link="/list" />
                <HeaderItem text="Reviews" link="/reviews"/>
            </nav>
        </header>
    );
}

export default HeaderContainer;