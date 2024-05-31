import React, { useEffect } from "react";
import styles from "./TWE.module.css";
import Footer from "../../Footer/Footer";
import ScrollToTopBtn from "../../../util/scrollToTopBtn";
import { TWEGroupImg, TWELaptopImg, TWEHeaderImg } from "../../../util/images";

export default function TheWomensExchange({ mode, setMode }) {

    const textClass = mode === "light" ? "darkText" : "lightText";
    const textHeadingClass = mode === "light" ? "darkTextHeading" : "lightTextHeading";

    useEffect(() => {
        setMode("light");
    },[setMode])

    return (
        <section className={styles.container}>
            <img className={styles.TWEHeader} src={TWEHeaderImg} alt="Laptop displaying The Women's Exchange work" />
            <section className={styles.TWEInfo}>
                <div className={styles.TWEHeading}>
                    <h1 className={textClass}>The Women's<br/> Exchange</h1>
                    <h3 className={textHeadingClass}>Web / Graphic Design / Branding</h3>
                </div>
                <div className={styles.TWEOverview}>
                    <h3 className={textClass}>Overview</h3>
                    <p className={textClass}>The Women's Exchange branding and website are ongoing projects. They are an example of the more technical side of my work as well as some of the mentorship I have provided to some of the juniors that have worked on the projects.<br />
                    <br />
                    As one of a handful of people at CMA that has experience building WordPress websites using theme builders like Divi, I have been building a number of the pages on the site and have helped to guide the juniors through our process of taking a project like this from wireframes & content to a functional website.
                    <br />
                    <br />
                    <a href="https://thewomens.exchange/">{">"} The Women's Exchange</a>
                    </p>
                </div>
            </section>
            <img src={TWELaptopImg} alt="Laptop showing The Women's Exchange work" />
            <img src={TWEGroupImg} alt="Examples of The Women's Exchange work" />
            <Footer mode={mode} />
            <ScrollToTopBtn mode={mode} />
        </section>    )
};
