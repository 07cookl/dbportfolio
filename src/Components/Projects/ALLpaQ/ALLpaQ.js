import React from "react";
import { ALLpaQLaptopImg, ALLpaQLongImageImg, ALLpaQ3dMockupRocksImg } from "../../../util/images";
import ALLpaQWebsiteCaseStudyHeader from "../../../resources/ALLpaQ/ALLpaQWebsite-CaseStudyHeader.mp4";
import ALLpaQ404 from "../../../resources/ALLpaQ/ALLpaQ-404-service-container-page-showcase-1.mp4";
// import ALLpaQPhones from "../../../resources/ALLpaQ/AllpaQPhones.mp4";
import Footer from "../../Footer/Footer";
import styles from "./ALLpaQ.module.css";

export default function ALLpaQ() {
    return (
        <section className={styles.container}>
        <video src={ALLpaQWebsiteCaseStudyHeader} autoPlay loop muted />
        <section className={styles.ALLpaQInfo}>
            <div className={styles.ALLpaQHeading}>
                <h1>ALLpaQ</h1>
                <h3>Web / Branding / Graphic Design / Editorial /<br />
                3D / Video / Motion Graphics</h3>
            </div>
            <div className={styles.ALLpaQOverview}>
                <h3>Overview</h3>
                <p>Working for ALLpaQ I've had the opportunity to work across the whole spectrum of their visual identity as a brand. <br />
                <br />
                Alongside my current team we've completely shifted ALLpaQ's social media presence, redesigned their websites, and created branding for their new businesses.<br />
                <br />
                <a href="https://allpaq.com/">{">"} ALLpaQ</a></p>
            </div>
        </section>
        <img className={styles.rocksImg} src={ALLpaQ3dMockupRocksImg} />
        <video src={ALLpaQ404} autoPlay loop muted />
        {/* <video src={ALLpaQPhones} autoPlay loop muted /> */}
        <img loading="lazy" src={ALLpaQLongImageImg} />
        <img loading="lazy" src={ALLpaQLaptopImg} />
        <Footer />
        </section>
    )
}