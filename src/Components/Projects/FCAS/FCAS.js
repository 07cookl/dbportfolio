import React, { useEffect } from "react";
import styles from "./FCAS.module.css";
import Footer from "../../Footer/Footer";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";
import { FCASDesktopImg, 
    FCASFigmaImg, 
    FCASGrid1Img, 
    FCASGrid2Img, 
    FCASGrid3Img, 
    FCASGridLongImg, 
    FCASHeaderImg, 
    FCASLaptopImg, 
    FCASMobileImg, 
    FCASQuoteImg, 
    FCASSquareImg } from "../../../util/images";

export default function FCAS({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("light");
    },[setMode])

    return (
        <section className={styles.container}>
            <img className={styles.FCASHeader} src={FCASHeaderImg} alt="Laptop displaying The Foundation to Combat Antisemitism work" />
            <section className={styles.FCASInfo}>
                <div className={styles.FCASHeading}>
                    <h1 className={textClass}>The Foundation <br/> to Combat <br/> Antisemitism</h1>
                    <h3 className={textHeadingClass}>Web / Branding</h3>
                </div>
                <div className={styles.FCASOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>With a goal to reinvent FCAS and intertwine successful elements of FCAS' <a href="https://www.standuptojewishhate.org/">'Stand Up To Jewish Hate'</a> campaign with its overarching brand, injecting a modern appeal into its identity without sacrificing the established ethos. This would mean updating the FCAS logo, typography and colour scheme. It would also meaen clearly positioning FCAS as the parent brand to the Stand Up To Jewish Hate campaign and any future campaigns that would follow.<br />
                    <br />
                    <br />
                    <a href="https://www.fcas.org/">{">"} The Foundation to Combat Antisemitism</a>
                    </p>
                </div>
            </section>
            <div className={styles.FCASGrid}>
                <img src={FCASGrid1Img} alt="Example of FCAS work" />
                <img src={FCASGrid2Img} alt="Example of FCAS work" />
                <img src={FCASGrid3Img} alt="Example of FCAS work" />
                <img src={FCASGridLongImg} alt="Example of FCAS work" />
            </div>
            <img src={FCASDesktopImg} alt="Example of The Foundation to Combat Antisemitism desktop work" />
            <img src={FCASMobileImg} alt="Examples of The Foundation to Combat Antisemitism mobile work" />
            <div className={styles.FCASImgGroup}>
                <img src={FCASSquareImg} alt="Example of FCAS work" />
                <img src={FCASQuoteImg} alt="Quote from FCAS" />
            </div>
            <img src={FCASFigmaImg} alt="Example of Figma design for FCAS" />
            <img src={FCASLaptopImg} alt="Example of FCAS work on laptop" />
            <Footer mode={mode} />
            <ScrollToTopBtn mode={mode} />
        </section>    
        )
};
