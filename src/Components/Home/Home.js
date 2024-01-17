import React, { useEffect } from "react";
import styles from "./Home.module.css";

export default function Home({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])
    
    return (
        <h1 className={styles.header}>This is the home page.</h1>
    )
};
