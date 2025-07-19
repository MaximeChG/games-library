import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./header.module.css";

interface HeaderItemProps {
    text: string,
    link: string
}

export default function HeaderItemComponent({ text, link }: HeaderItemProps) {
    return <Link href={link} className={styles.navItem}>
        {text}
    </Link>
}