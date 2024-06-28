import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { homeLegoTowerImg } from "../../util/images";
import homeCompilation from "../../resources/Home/HomepageCompilation.mp4";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollToTopBtn from "../../util/scrollToTopBtn";
import ALLpaQVideo from "../../resources/ALLpaQ/ALLpaQ-404-service-container-page-showcase-1.mp4";
import CMAVideo from "../../resources/CMA/PicadillyCircusMockup.mp4";
import tsoHostVideo from "../../resources/tsoHost/tsoHOST_DEP_Mockup 2.mp4";

export default function Home({ mode, setMode }) {
    const navigate = useNavigate();
    const element = document.getElementById("navBar");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            document.documentElement.scrollTo({
                top: 0,
                left: 0,
            });
        }
    }, [location]);

    useEffect(() => {
        setMode("dark");
    },[mode, setMode])

    const middleDot = '\u00B7';

    const experienceTicker = ['UX','\u2217','Web','\u2217','Social','\u2217','Photography','\u2217','Editorial','\u2217','UI','\u2217','3D','\u2217','Photobashing','\u2217','Print','\u2217'];

    const handleClick = (page) => {
        navigate(`/work/${page}`);
        element.scrollIntoView({
            alignToTop: true,
        });
    };

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
            <video src={homeCompilation} autoPlay muted loop />
            <div className={styles.quote}>
                <p><span>"</span>I've worked with Dan for about four years and I never cease to be amazed by his ever-evolving skills and abilities."</p>
                <img src={homeLegoTowerImg} alt=""/>
            </div>
            <div className={styles.mobileViews}>
                <div className={styles.mobileVideo}>
                    <Link to="/work/ALLpaQ">
                        <video src={ALLpaQVideo} autoPlay muted loop />
                    </Link>
                    <div className={styles.mobileTitle} onClick={() => handleClick("ALLpaQ")}>ALLpaQ</div>
                </div>
                <div className={styles.mobileVideo}>
                    <Link to="/work/CMA">
                        <video src={CMAVideo} autoPlay muted loop />
                    </Link>
                    <div className={styles.mobileTitle} onClick={() => handleClick("CMA")}>CMA</div>
                </div>
                <div className={styles.mobileVideo}>
                    <Link to="/work/tsoHost">
                        <video src={tsoHostVideo} autoPlay muted loop />
                    </Link>
                    <div className={styles.mobileTitle} onClick={() => handleClick("tsoHost")}>tsoHost</div>
                </div>
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
