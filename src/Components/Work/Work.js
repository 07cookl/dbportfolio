import React, { useEffect } from "react";
import styles from "./Work.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import Footer from "../Footer/Footer";
import { workImages } from "../../util/images";

export default function Work({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])
    
    return (
        <section className={styles.container}>
            <section className={styles.cardsContainer}>
                <figure className={styles.project}>
                    <Link to={ROUTES.ALLpaQ()}>
                    <img src={workImages[0].src} alt="click to go to ALLpaQ page" />
                    </Link>
                    <figcaption className={styles.heading}>ALLpaQ</figcaption>
                    <figcaption className={styles.caption}>
                        <hr/>
                        <ul>
                            <li>Digital design</li>
                            <li>UX / UI</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure className={styles.project}>
                    <Link to={ROUTES.tsoHost()}>
                    <img src={workImages[1].src} alt="click to go to tsoHost page" />
                    </Link>
                    <figcaption className={styles.heading}>tsoHost</figcaption>
                    <figcaption className={styles.caption}>
                        <hr/>
                        <ul>
                            <li>Digital design</li>
                            <li>Video</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure className={styles.project}>
                    <Link to={ROUTES.CMA()}>
                    <img src={workImages[2].src} alt="click to go to CMA page" />
                    </Link>
                    <figcaption className={styles.heading}>CMAgency</figcaption>
                    <figcaption className={styles.caption}>
                        <hr/>
                        <ul>
                            <li>Digital design</li>
                            <li>UX / UI</li>
                            <li>3D</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure className={styles.project}>
                    <Link to={ROUTES.fundomundo()}>
                    <img src={workImages[3].src} alt="click to go to Fundomundo page" />
                    </Link>
                    <figcaption className={styles.heading}>Fundomundo</figcaption>
                    <figcaption className={`${styles.caption} ${styles.darkText}`}>
                        <hr/>
                        <ul>
                            <li>Branding</li>
                            <li>UX / UI</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure className={styles.project}>
                    <Link to={ROUTES.TheWomensExchange()}>
                    <img src={workImages[4].src} alt="click to go to The Women's Exchange page" />
                    </Link>
                    <figcaption className={styles.heading}>The Women's Exchange</figcaption>
                    <figcaption className={styles.caption}>
                        <hr/>
                        <ul>
                            <li>Branding</li>
                            <li>UX / UI</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure className={styles.project}>
                    <Link to={ROUTES.APE()}>
                    <img src={workImages[5].src} alt="click to go to ALLpaQ Plastic Engineering page" />
                    </Link>
                    <figcaption className={`${styles.heading} ${styles.darkText}`}>ALLpaQ Plastic Engineering</figcaption>
                    <figcaption className={`${styles.caption} ${styles.darkText}`}>
                        <hr/>
                        <ul>
                            <li>Branding</li>
                            <li>UX / UI</li>
                        </ul>
                    </figcaption>
                </figure>
            </section>
            <div className={styles.footer}>
                <Footer mode={mode} />
            </div>
        </section>
    )
};
