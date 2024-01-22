import React from "react";
import styles from "./scrollToTopBtn.module.css";
import darkArrow from "../resources/chevron-up-dark.svg";
import lightArrow from "../resources/chevron-up-light.svg";

export default function ScrollToTopBtn({ mode }) {

    const arrow = mode === "light" ? darkArrow : lightArrow;
    const borderColor = mode === "light" ? "#0D0D0D" : "#F1F1F1";
    const backgroundColor = mode === "light" ? "#F1F1F1" : "#0D0D0D";

    const element = document.getElementById("navBar");

    const handleClick = (e) => {
        e.preventDefault();
        element.scrollIntoView({
            alignToTop: true,
            behavior: "smooth"
        })
    }

    return (
        <button className={styles.scrollBtn} style={{ border : `1px solid ${borderColor}`, backgroundColor : backgroundColor }} onClick={handleClick}>
            <img src={arrow} alt="scroll" onClick={handleClick} />
        </button>
    )
}