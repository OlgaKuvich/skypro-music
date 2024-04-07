"use client"
import styles from "@components/Main/Main.module.css";
import Nav from "@components/Nav/Nav";
import CenterBlock from "@components/CenterBlock/CenterBlock";
import SideBar from "@components/SideBar/SideBar";
import Bar from "@components/Bar/Bar";
import { useState } from "react";
import { trackType } from "@/types";

export default function Main() {
    const [track, setTrack] = useState<trackType | null>(null);
    return (
        <>
            <main className={styles.main}>
                <Nav />
                <CenterBlock setTrack={setTrack} />
                <SideBar />
            </main>
            {track ? <Bar /> : ""}
             {/* <Bar /> */}
            {/* {track && <Bar tracks={track} />} */}
            <footer className={styles.footer} />
        </>
    )
}