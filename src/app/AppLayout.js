import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";


export default function AppLayout({ mode }) {

    const linkClass = mode === "light" ? "darkLink" : "lightLink"

    return (
        <div className={`${mode} bodyContainer`}>
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
    );
}
