import React, { useEffect } from "react";
import styles from "./About.module.css";
import aboutVideo from "../../resources/About/aboutAndContactPage.mp4";
import ScrollToTopBtn from "../../util/scrollToTopBtn";

export default function About({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[mode, setMode])

    return (
        <section className={styles.container}>
            <h1>About</h1>
            <div className={styles.aboutInfo}>
                <div className={styles.experience}>
                    <h3>Experience</h3>
                    <p>Senior Designer with five years of experience. Currently working at <a href="https://cmagency.co.uk/">CMA</a>, a full service design and marketing agency, working with various global and local companies.</p>
                </div>
                <div className={styles.expertise}>
                    <h3>Expertise</h3>
                    <ul>
                        <li>Brand Identity</li>
                        <li>Web Design</li>
                        <li>Product Design</li>
                        <li>Graphic Design</li>
                        <li>Editorial</li>
                        <li>3D Asset Photography</li>
                    </ul>
                </div>
                <div className={styles.education}>
                    <h3>Education</h3>
                    <ul>
                        <li>MA Design / University of Lincoln</li>
                        <li>BA Interactive Design / University of Lincoln</li>
                    </ul>
                </div>
            </div>
            <video className={styles.palletteImage} src={aboutVideo} autoPlay muted loop />
            <ScrollToTopBtn mode={mode} />
        </section>
    )
};
