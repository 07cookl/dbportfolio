import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
import Footer from "../Components/Footer/Footer";


export default function AppLayout({ mode }) {

    const linkClass = mode === "light" ? "darkLink" : "lightLink";

    return (
        <>
        <div id="navBar" className={`${mode} bodyContainer`} style={{minHeight: `94vh`}}>
            <nav className={mode}>
                <ul>
                <li>
                    <NavLink to={ROUTES.home()} className={linkClass}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.about()} className={linkClass}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.work()} className={linkClass}>
                    Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.contact()} className={linkClass}>
                    Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
        <div className={mode}>
            <Footer mode={mode} />
        </div>
        </>
    );
}
