import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { workImages } from "../../util/images";
import { Link } from "react-router-dom";

export default function Home({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])

    const experienceTicker = ['UX','*','Web','*','Social','*','Photography','*','Editorial','*','UI','*','3D','*','Photobashing','*','Print','*']

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <ul>
                    <li>Daniel</li>
                    <li>Blackman</li>
                    <li>Design</li>
                </ul>
            </header>
            <p>A UK based <strong>multi-disciplinary designer.</strong></p>
            <p>With a background in interactive design and a career spanning all visual elements of the marketing toolkit.</p>
            <img src={workImages[5].src} alt="" />
            <div className={styles.quote}>
                <p><span>"</span>I've worked with Dan for about four years and I never cease to be amazed by his ever-evolving skills and abilities."</p>
                <img src={workImages[5].src} alt=""/>
            </div>
            <div className={styles.mobileViews}>
                <img src={workImages[5].src} alt="" />
            </div>
            <Link to="/work"><button>See more</button></Link>
            <div className={styles.tickerWrapper}>
                <div className={styles.tickerContainer}>
                    {experienceTicker.map((experience, index) => {
                        return (
                        <div className={styles.wrapper} key={index}>
                            <p>{experience}</p>
                        </div>
                        )
                    })}
                </div>
                <div className={`${styles.tickerContainer} ${styles.tickerContainer2}`}>
                    {experienceTicker.map((experience, index) => {
                        return (
                        <div className={styles.wrapper} key={index}>
                            <p>{experience}</p>
                        </div>
                        )
                    })}
                </div>
                <div className={`${styles.tickerContainer} ${styles.tickerContainer2}`}>
                    {experienceTicker.map((experience, index) => {
                        return (
                        <div className={styles.wrapper} key={index}>
                            <p>{experience}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};
