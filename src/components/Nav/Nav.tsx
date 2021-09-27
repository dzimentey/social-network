import React from "react";
import { NavLink } from "react-router-dom";
import c from './Nav.module.css'


export const Nav = () => {
    return(
        <nav className={c.nav}>
            <div>
                <NavLink to='/profile' activeClassName={c.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={c.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={c.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={c.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={c.active}>Settings</NavLink>
            </div>
        </nav>
    )
}