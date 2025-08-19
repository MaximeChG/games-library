'use client';
import Link from "next/link";

export default function Error(){
    return <main>
            <h1>An error occured!</h1>
            <p><Link href={"/"}>Return Home</Link></p>
        </main>
}