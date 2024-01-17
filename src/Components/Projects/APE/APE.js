import React, { useEffect } from "react";
import styles from "./APE.module.css";
import Footer from "../../Footer/Footer";

export default function APE({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("light");
    },[])

    return (
        <section className={styles.container}>
            <section className={styles.APEInfo}>
                <div className={styles.APEHeading}>
                    <h1 className={textClass}>APE</h1>
                    <h3 className={textHeadingClass}>Web / Graphic Design / Branding</h3>
                </div>
                <div className={styles.APEOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>We were given a two week period to create the beginnings of a brand and loosely design a website. APE was a chance to rapidly develop and prototype new sections and customisable styles for a modular WordPress theme we had created for the main ALLpaQ website.<br />
                    <br />
                    While APE needed to stand alone as its own brand with their products' strong customisation at its centre, the client also requested that it had strong connections to the main ALLpaQ brand. To this point, we chose to carry over certain styles, text hierarchies and colours, while overlaying a semi-handmade aesthetic to emphasise the planning and consultation that goes into the customisation of these products.
                    <br />
                    <br />
                    <a href="https://custompallets.uk/">{">"} APE</a>
                    </p>
                </div>
            </section>
            <Footer mode={mode} />
        </section>    )
};
