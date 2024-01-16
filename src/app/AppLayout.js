import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";


export default function AppLayout({ mode, setMode }) {

    const linkClass = mode === "light" ? "darkLink" : "lightLink"

    return (
        <div className={mode}>
            <nav className={mode}>
                <ul>
                <li>
                    <NavLink to={ROUTES.home()} className={linkClass} onClick={() => setMode("dark")}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.about()} className={linkClass} onClick={() => setMode("dark")}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.work()} className={linkClass} onClick={() => setMode("dark")}>
                    Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.contact()} className={linkClass} onClick={() => setMode("dark")}>
                    Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}
