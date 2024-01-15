import React from "react";
import styles from "./Footer.module.css";
import homeImageLight from "../../resources/homeImageLight.png";
import homeImageDark from "../../resources/homeImageDark.png";
import ROUTES from "../../app/routes";
import { Link } from "react-router-dom";

export default function Footer(props) {

    const homeImage = props.mode === "light" ? homeImageLight : homeImageDark;
    const modeClass = props.mode === "light" ? styles.footerLight : styles.footerDark;

    return (
        <footer className={styles.footer} >
            <p className={`${styles.name}  ${modeClass}`}>Daniel Blackman</p>
            <Link to={ROUTES.home()}><img src={homeImage} alt="Return to home page" /></Link>
            <p className={`${styles.role} ${modeClass}`}>Designer</p>
        </footer>
    )
}
