import React, { useEffect } from "react";
import styles from "./CMA.module.css";
import Footer from "../../Footer/Footer";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";
import { CMAAmazonImg, CMAArcadeImg, CMAEmailImg, CMANikeImg, CMANineGridImg, CMAPinkImg, CMAToastImg, CMATwoLaptopsImg, CMAWavesImg } from "../../../util/images";
import CMAPicadilly from "../../../resources/CMA/PicadillyCircusMockup.mp4";

export default function CMA({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("dark");
    },[])

    return (
        <section className={styles.container}>
            <div className={styles.CMAHero}>

            </div>
            <section className={styles.CMAInfo}>
                <div className={styles.CMAHeading}>
                    <h1 className={textClass}>CMA</h1>
                    <h3 className={textHeadingClass}>Web / Branding / Video / Editorial / UX</h3>
                </div>
                <div className={styles.CMAOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>From the beginning of my time at CMA I was given an exceptional amount of freedom to help build and expand upon the brand identity.<br />
                    <br />
                    Working alongside the Creative Director we transformed CMA from a largely content driven brand, both visually and in terms of the work they took on, into a highly visual full-service creative agency.
                    <br />
                    <br />
                    <a href="https://cmagency.co.uk/">{">"} CMA</a>
                    </p>
                </div>
            </section>
            <img src={CMANineGridImg} alt="Nine grid of CMA work examples" />
            <img src={CMAToastImg} style={{ marginTop: "20px" }} alt="Example of CMA work" />
            <img src={CMATwoLaptopsImg} alt="CMA work on laptops" />
            <video src={CMAPicadilly} autoPlay muted loop />
            <div className={styles.CMAGrid}>
                <div style={{ backgroundColor: "#F1F1F1" }}></div>
                <div><img src={CMAAmazonImg} alt=""/></div>
                <div><img src={CMAWavesImg} alt=""/></div>
                <div><img src={CMAPinkImg} alt=""/></div>
                <div><img src={CMAArcadeImg} alt=""/></div>
                <div style={{ backgroundColor : "#0D0D0D" }}></div>
                <div><img src={CMAAmazonImg} alt=""/></div>
                <div><img src={CMANikeImg} alt=""/></div>
            </div>
            <Footer mode={mode} />
            <ScrollToTopBtn mode={mode} />
        </section>    
    )
};
