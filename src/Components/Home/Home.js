import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { workImages } from "../../util/images";
import { Link } from "react-router-dom";
import ScrollToTopBtn from "../../util/scrollToTopBtn";

export default function Home({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])

    const middleDot = '\u00B7';

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
            <div className={styles.intro}>
                <p>A UK based <strong>multi-disciplinary designer.</strong></p>
                <p>With a background in interactive design and a career spanning all visual elements of the marketing toolkit.</p>
            </div>
            <img src={workImages[5].src} alt="" />
            <div className={styles.quote}>
                <p><span>"</span>I've worked with Dan for about four years and I never cease to be amazed by his ever-evolving skills and abilities."</p>
                <img src={workImages[5].src} alt=""/>
            </div>
            <div className={styles.mobileViews}>
                <img src={workImages[5].src} alt="" />
            </div>
            <Link to="/work"><button className={styles.seeMoreBtn}>See more</button></Link>
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
                <div className={styles.tickerContainer}>
                    {experienceTicker.map((experience, index) => {
                        return (
                        <div className={styles.wrapper} key={index}>
                            <p>{experience}</p>
                        </div>
                        )
                    })}
                </div>
                <div className={styles.tickerContainer}>
                    {experienceTicker.map((experience, index) => {
                        return (
                        <div className={styles.wrapper} key={index}>
                            <p>{experience}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.CMAQuote}>
                <div className={styles.nameRole}>
                    <p><strong>John Ashbrook {middleDot} 1st</strong><br/>
                    <span>Senior Writer at CMA Ltd</span></p>
                </div>
                <p>I've worked with Dan for about four years and I never cease to be 
                    amazed by his ever-evolving skills and abilities.<br/>
                <br/>
                He is always exploring new design technologies and has led us into 
                some incredibly exciting new fields such as video production, 
                animation, 3D modelling and AI.<br/>
                <br/>
                His ability to give his full attention to several different jobs at once is 
                mind-boggling and he can turn work around so fast he <strong>*must*</strong> have 
                a time machine. The fact that he also does this with humour and 
                self-affacing modesty just makes him even more of a pleasure to 
                work with.<br/>
                <br/>
                Dan really is a 21st century renaissance man.</p>
            </div>
            <div className={styles.homeFooter}>
                <p>Daniel Blackman <strong>Design</strong></p>
                <p>2024</p>
            </div>
            <ScrollToTopBtn mode={mode} />
        </section>
    )
};
