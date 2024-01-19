import React, { useEffect } from "react";
import styles from "./Contact.module.css";
import Footer from "../Footer/Footer";
import { workImages } from "../../util/images";

export default function Contact({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])

    return (
        <section className={styles.container}>
            <h1>Contact</h1>
            <div className={styles.cv}>
                Full CV & References available on request.
            </div>
            <div className={styles.contactInfo}>
                <div className={styles.contacts}>
                    <p><strong>Phone</strong></p>
                    <p>07538788420</p>
                    <p><strong>Email</strong></p>
                    <p><a href="mailto:daniel.blackman95@gmail.com">daniel.blackman95@gmail.com</a></p>
                </div>
                <div className={styles.socials}>
                    <p><strong><a href="https://www.linkedin.com/in/danielblackmandesign/">LinkedIn</a></strong></p>
                    <p><strong><a href="https://www.instagram.com/danielblackmandesign/">Instagram</a></strong></p>
                </div>
            </div>
            <img className={styles.palletteImage} src={workImages[5].src} alt=""/>
            <div className={styles.footer}>
                <Footer mode={mode} />
            </div>
        </section>
    )
};
