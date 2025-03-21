import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./header.module.css";

interface HeaderItemProps {
    text: string,
    link: string
}

const HeaderItemComponent: FunctionComponent<HeaderItemProps> = ({ text, link }) => {
    return <Link href={link} className={styles.navItem}>
        {text}
    </Link>
}

export default HeaderItemComponent;