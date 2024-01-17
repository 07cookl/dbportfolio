import React from "react";
import styles from "./Footer.module.css";
import homeImageLight from "../../resources/homeImageLight.png";
import homeImageDark from "../../resources/homeImageDark.png";
import ROUTES from "../../app/routes";
import { Link, useNavigate } from "react-router-dom";

export default function Footer(props) {

    const navigate = useNavigate();

    const homeImage = props.mode === "light" ? homeImageDark : homeImageLight;
    const modeClass = props.mode === "light" ? "footerDark" : "footerLight";

    return (
        <footer className={styles.footer} onClick={() => navigate("/")}>
            <p className={`${styles.name}  ${modeClass}`}>Daniel Blackman</p>
            <img src={homeImage} alt="Return to home page" />
            <p className={`${styles.role} ${modeClass}`}>Designer</p>
        </footer>
    )
}
