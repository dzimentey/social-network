import logo from "../../logo.png";
import React from "react";
import c from './Header.module.css'
import { NavLink } from "react-router-dom";


export const Header = (props: any) => {

    return (
        <header className={c.header}>
            <img src={logo} className={c.AppLogo} alt="logo"/>
            <div className={c.loginBlock}>
                { props.isAuth
                    ? <div>{props.login}  <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}