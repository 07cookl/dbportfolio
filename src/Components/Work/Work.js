import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Work({ setMode }) {

    setMode("dark");
    
    return (
        <>
            <h1>This is the work page.</h1>
            <ul>
                <li><Link to={ROUTES.ALLpaQ()}>ALLpaQ</Link></li>
                <li><Link to={ROUTES.tsoHost()}>tsoHost</Link></li>
                <li><Link to={ROUTES.CMA()}>CMA</Link></li>
                <li><Link to={ROUTES.fundomundo()}>Fundomundo</Link></li>
                <li><Link to={ROUTES.TheWomensExchange()}>The Women's Exchange</Link></li>
                <li><Link to={ROUTES.APE()}>APE</Link></li>
            </ul>
        </>
    )
};
