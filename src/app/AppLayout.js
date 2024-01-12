import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";
import Footer from "../components/Footer/Footer";


export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <NavLink to={ROUTES.home()} >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.about()} >
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.work()} >
                    Work
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.contact()} >
                    Contact
                    </NavLink>
                </li>
                </ul>
            </nav>
            <Outlet/>
            <Footer />
        </div>
    );
}
