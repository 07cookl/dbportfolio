import React from "react";
import styles from "./Footer.module.css";
import homeImageLight from "../../resources/homeImageLight.png";
import homeImageDark from "../../resources/homeImageDark.png";
import { useNavigate } from "react-router-dom";

export default function Footer(props) {

    const navigate = useNavigate();

    const homeImage = props.mode === "light" ? homeImageDark : homeImageLight;
    const modeClass = props.mode === "light" ? "footerDark" : "footerLight";

    const element = document.getElementById("navBar");

    const handleClick = (e) => {
        e.preventDefault();
        navigate("/");
        element.scrollIntoView({
            alignToTop: true,
            behavior: "smooth"
        })
    }

    return (
        <footer className={styles.footer} onClick={handleClick}>
            <p className={`${styles.name}  ${modeClass}`}>Daniel Blackman</p>
            <img src={homeImage} alt="Return to home page" />
            <p className={`${styles.role} ${modeClass}`}>Designer</p>
        </footer>
    )
}
