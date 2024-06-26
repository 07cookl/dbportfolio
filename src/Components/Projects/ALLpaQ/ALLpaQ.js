import React, { useEffect } from "react";
import { ALLpaQLaptopImg, ALLpaQLongImageImg, ALLpaQ3dMockupRocksImg, ALLpaQEarthImg } from "../../../util/images";
import ALLpaQWebsiteCaseStudyHeader from "../../../resources/ALLpaQ/ALLpaQWebsite-CaseStudyHeader.mp4";
import ALLpaQ404 from "../../../resources/ALLpaQ/ALLpaQ-404.webm";
import ALLpaQ404Safari from "../../../resources/ALLpaQ/ALLpaQ-404-safari.mp4";
import styles from "./ALLpaQ.module.css";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";
import { isSafari } from "react-device-detect";

export default function ALLpaQ({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("dark");
    },[setMode])
    
    return (
        <section className={styles.container}>
            <video src={ALLpaQWebsiteCaseStudyHeader} style={{ width: "100vw", maxWidth: "100vw" }} autoPlay loop muted />
            <section className={styles.ALLpaQInfo}>
                <div className={styles.ALLpaQHeading}>
                    <h1 className={textClass}>ALLpaQ</h1>
                    <h3 className={textHeadingClass}>Web / Branding / Graphic Design / Editorial /<br />
                    3D / Video / Motion Graphics</h3>
                </div>
                <div className={styles.ALLpaQOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>Working for ALLpaQ I've had the opportunity to work across the whole spectrum of their visual identity as a brand. <br />
                    <br />
                    Alongside my current team we've completely shifted ALLpaQ's social media presence, redesigned their websites, and created branding for their new businesses.<br />
                    <br />
                    <a href="https://allpaq.com/">{">"} ALLpaQ</a></p>
                </div>
            </section>
            <img className={styles.rocksImg} src={ALLpaQ3dMockupRocksImg} alt="An example of ALLpaQ work" />
            <div className={styles.ALLpaQ404}>
                <img src={ALLpaQEarthImg} alt="Earth background" />
                <video src={isSafari ? ALLpaQ404Safari : ALLpaQ404} autoPlay loop muted />
            </div>
            <img src={ALLpaQLongImageImg} alt="Examples of ALLpaQ work" />
            <img src={ALLpaQLaptopImg} alt="Laptop displaying ALLpaQ work" />
            <ScrollToTopBtn mode={mode} />
        </section>
    )
}