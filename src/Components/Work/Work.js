import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Work({ setMode }) {
    
    return (
        <>
            <h1>This is the work page.</h1>
            <ul>
                <li><Link to={ROUTES.ALLpaQ()} onClick={() => setMode("dark")}>ALLpaQ</Link></li>
                <li><Link to={ROUTES.tsoHost()} onClick={() => setMode("light")}>tsoHost</Link></li>
                <li><Link to={ROUTES.CMA()} onClick={() => setMode("dark")}>CMA</Link></li>
                <li><Link to={ROUTES.fundomundo()} onClick={() => setMode("light")}>Fundomundo</Link></li>
                <li><Link to={ROUTES.TheWomensExchange()} onClick={() => setMode("light")}>The Women's Exchange</Link></li>
                <li><Link to={ROUTES.APE()} onClick={() => setMode("light")}>APE</Link></li>
            </ul>
        </>
    )
};
