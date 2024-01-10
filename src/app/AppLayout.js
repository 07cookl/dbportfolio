import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";


export default function AppLayout() {
    return (
        <div>
            <nav>
                <ul>
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
        </div>
    );
}
