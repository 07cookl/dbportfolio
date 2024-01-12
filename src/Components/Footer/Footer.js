import React from "react";
import styles from "./Footer.module.css";
import homeImage from "../../resources/homeImage.png";

export default function Footer() {
    return (
        <footer className={styles.footer} >
            <p>Daniel Blackman</p>
            <img src={homeImage} alt="Return to home page" />
            <p>Designer</p>
        </footer>
    )
}