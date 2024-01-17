import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import Footer from "../Footer/Footer";

export default function Work({ mode, setMode }) {

    useEffect(() => {
        setMode("dark");
    },[])
    
    return (
        <>
            <h1>This is the work page.</h1>
            <ul>
                <li><Link to={ROUTES.ALLpaQ()} >ALLpaQ</Link></li>
                <li><Link to={ROUTES.tsoHost()} >tsoHost</Link></li>
                <li><Link to={ROUTES.CMA()} >CMA</Link></li>
                <li><Link to={ROUTES.fundomundo()} >Fundomundo</Link></li>
                <li><Link to={ROUTES.TheWomensExchange()} >The Women's Exchange</Link></li>
                <li><Link to={ROUTES.APE()} >APE</Link></li>
            </ul>
            <Footer mode={mode} />
        </>
    )
};
