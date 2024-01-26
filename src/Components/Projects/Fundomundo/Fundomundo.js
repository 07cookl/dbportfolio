import React, { useEffect } from "react";
import styles from "./Fundomundo.module.css";
import Footer from "../../Footer/Footer";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";
import { FundoDesktopGroupImg, FundoLaptopImg, FundoLongGroupImg, FundoMobileGroupImg, FundoOpenLaptopImg } from "../../../util/images";

export default function Fundomundo( { mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("light");
    },[])

    return (
        <section className={styles.container}>
            <section className={styles.fundomundoInfo}>
                <div className={styles.fundomundoHeading}>
                    <h1 className={textClass}>Fundomundo</h1>
                    <h3 className={textHeadingClass}>Web / Graphic Design / Branding</h3>
                </div>
                <div className={styles.fundomundoOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>For this project Fundomundo asked us to redesign their website and gave us a large amoutn of freedom with their brand to do so. However, they were also working with a very small budget and as such I was given a very short deadline of just 3 days to produce some designs that would allow their development team to apply the new style across the site. After this they also asked us to produce some email templates in a similar manner.<br />
                    <br />
                    <a href="https://www.fundomundo.com/en-ae">{">"} Fundomundo</a>
                    </p>
                </div>
            </section>
            <img src={FundoLongGroupImg} alt="Examples of Fundomundo work" />
            <img src={FundoOpenLaptopImg} style={{ maxWidth: "100vw" }} alt="Laptop with example of Fundomundo work" />
            <img src={FundoDesktopGroupImg} alt="Examples of Fundomundo desktop work" />
            <img src={FundoLaptopImg} style={{ marginTop: "100px" }} alt="" />
            <img src={FundoMobileGroupImg} alt="Examples of Fundomundo mobile work" />
            <Footer mode={mode} />
            <ScrollToTopBtn mode={mode} />
        </section>
    )
};
