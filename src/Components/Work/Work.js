import React, { useEffect } from "react";
import styles from "./Work.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import Footer from "../Footer/Footer";
import { workImages } from "../../util/images";
import ScrollToTopBtn from "../../util/scrollToTopBtn";

export default function Work({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[mode, setMode])
    
    return (
        <section className={styles.container}>
            <section className={styles.cardsContainer}>
                <Link to={ROUTES.ALLpaQ()}>
                    <figure className={styles.project}>
                        <img src={workImages[0].src} alt="click to go to ALLpaQ page" />
                        <div className={styles.projectInfo}>
                            <figcaption className={styles.heading}>ALLpaQ</figcaption>
                            <figcaption className={styles.caption}>
                                <hr/>
                                <ul>
                                    <li>Digital design</li>
                                    <li>UX / UI</li>
                                </ul>
                            </figcaption>
                        </div>
                    </figure>
                </Link>
                <Link to={ROUTES.tsoHost()}>
                    <figure className={styles.project}>
                        <img src={workImages[1].src} alt="click to go to tsoHost page" />
                        <div className={styles.projectInfo}>
                            <figcaption className={styles.heading}>tsoHost</figcaption>
                            <figcaption className={styles.caption}>
                                <hr/>
                                <ul>
                                    <li>Digital design</li>
                                    <li>Video</li>
                                </ul>
                            </figcaption>
                        </div>
                    </figure>
                </Link>
                <Link to={ROUTES.CMA()}>
                    <figure className={styles.project}>
                        <img src={workImages[2].src} alt="click to go to CMA page" />
                        <div className={styles.projectInfo}>
                            <figcaption className={styles.heading}>CMAgency</figcaption>
                            <figcaption className={styles.caption}>
                                <hr/>
                                <ul>
                                    <li>Digital design</li>
                                    <li>UX / UI</li>
                                    <li>3D</li>
                                </ul>
                            </figcaption>
                        </div>
                    </figure>
                </Link>
                <Link to={ROUTES.fundomundo()}>
                    <figure className={styles.project}>
                        <img src={workImages[3].src} style={{ objectPosition: "left" }} alt="click to go to Fundomundo page" />
                        <div className={styles.projectInfo}>
                            <div className={styles.heading}>Fundomundo</div>
                            <div className={`${styles.caption} ${styles.darkText}`}>
                                <hr/>
                                <ul>
                                    <li>Branding</li>
                                    <li>UX / UI</li>
                                </ul>
                            </div>
                        </div>
                    </figure>
                </Link>
                <Link to={ROUTES.TheWomensExchange()}>
                    <figure className={styles.project}>
                        <img src={workImages[4].src} alt="click to go to The Women's Exchange page" />
                        <div className={styles.projectInfo}>
                            <figcaption className={styles.heading}>The Women's Exchange</figcaption>
                            <figcaption className={styles.caption}>
                                <hr/>
                                <ul>
                                    <li>Branding</li>
                                    <li>UX / UI</li>
                                </ul>
                            </figcaption>
                        </div>
                    </figure>
                </Link>
                <Link to={ROUTES.APE()}>
                    <figure className={styles.project}>
                        <img src={workImages[5].src} alt="click to go to ALLpaQ Plastic Engineering page" />
                        <div className={styles.projectInfo}>
                            <figcaption className={`${styles.heading} ${styles.darkText}`}>ALLpaQ Plastic Engineering</figcaption>
                            <figcaption className={`${styles.caption} ${styles.darkText}`}>
                                <hr/>
                                <ul>
                                    <li>Branding</li>
                                    <li>UX / UI</li>
                                </ul>
                            </figcaption>
                        </div>
                    </figure>
                </Link>
            </section>
            <div style={{ position: "absolute", bottom: "0" }}>
                <Footer mode={mode} />
            </div>
            <ScrollToTopBtn mode={mode} />
        </section>
    )
};
