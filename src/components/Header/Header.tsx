import logo from "../../logo.png";
import React from "react";
import c from './Header.module.css'
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={c.header}>
            <img src={logo} className={c.AppLogo} alt="logo"/>
            <div className={c.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    )
}