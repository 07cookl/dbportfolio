import React, { useEffect } from "react";
import styles from "./tsoHost.module.css";
import { tsoHostDisplayAdsImg, tsoHostNewspaperImg, tsoHostCarouselGif } from "../../../util/images";
import tsoHostSubwayBillboard from "../../../resources/tsoHost/Subway Billboard Mockup - Copy.mp4";
import tsoHostDEPMockup from "../../../resources/tsoHost/tsoHOST_DEP_Mockup 2.mp4";
import tsoHostHeaderImg from "../../../resources/tsoHost/TSOHeader.png";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";

export default function TsoHost({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("light");
    },[setMode])

    return (
        <section className={styles.container}>
            <img className={styles.tsoHostHeader} src={tsoHostHeaderImg} alt="Laptop displaying tsoHost work" />
            <section className={styles.tsoHostInfo}>
                <div className={styles.tsoHostHeading}>
                    <h1 className={textClass}>tsoHost</h1>
                    <h3 className={textHeadingClass}>Web / Graphic Design / Video / Motion Graphics</h3>
                </div>
                <div className={styles.tsoHostOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>Our time working with tsoHost started with us having the opportunity to take what they had as a brand and completely revamp it for a new approach to their social media marketing. <br />
                    <br />
                    Over time as they expanded those marketing efforts outside of their social media presence, we worked with them to define a more consistent visual style that would reinforce brand recognition in those busier, more competitive contexts.</p>
                </div>
            </section>
            <video className={styles.billboard} src={tsoHostSubwayBillboard} autoPlay muted loop />
            <img src={tsoHostNewspaperImg} alt="tsoHost newspaper example" />
            <img src={tsoHostCarouselGif} alt="Carousel of tsoHost work" />
            <img src={tsoHostDisplayAdsImg} style={{ position: "relative", right: "-250px", maxWidth: "120vw" }} alt="tsoHost display ads on laptop" />
            <video src={tsoHostDEPMockup} autoPlay loop muted />
            <ScrollToTopBtn mode={mode} />
        </section>
    )
}