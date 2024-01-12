import React from "react";
import { ALLpaQLaptopImg, ALLpaQLongImageImg, ALLpaQ3dMockupRocksImg } from "../../../util/images";
import ALLpaQWebsiteCaseStudyHeader from "../../../resources/ALLpaQ/ALLpaQWebsite-CaseStudyHeader.mp4";
import ALLpaQ404 from "../../../resources/ALLpaQ/ALLpaQ-404-service-container-page-showcase-1.mp4";
import ALLpaQPhones from "../../../resources/ALLpaQ/AllpaQPhones.mp4";
import styles from "./ALLpaQ.module.css";

export default function ALLpaQ() {
    return (
        <>
        <video src={ALLpaQWebsiteCaseStudyHeader} autoPlay loop muted />
        <section className={styles.ALLpaQInfo}>
            <div className={styles.ALLpaQHeading}>
                <h1>ALLpaQ</h1>
                <h3>Information</h3>
            </div>
            <div className={styles.ALLpaQOverview}>
                <h3>Overview</h3>
                <p>Information <br />
                <a href="#">Link</a></p>
            </div>
        </section>
        <img src={ALLpaQ3dMockupRocksImg} />
        {/* <video src={ALLpaQ404} autoPlay loop muted />
        <video src={ALLpaQPhones} autoPlay loop muted />
        <img loading="lazy" src={ALLpaQLongImageImg} />
        <img loading="lazy" src={ALLpaQLaptopImg} /> */}
        
        </>
    )
}