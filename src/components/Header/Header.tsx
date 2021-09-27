import logo from "../../logo.png";
import React from "react";
import c from './Header.module.css'

export const Header = () => {
    return (
        <header className={c.header}>
            <img src={logo} className={c.AppLogo} alt="logo"/>
        </header>
    )
}