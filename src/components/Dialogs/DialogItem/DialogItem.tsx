import React from "react";
import {NavLink} from "react-router-dom";
import c from './../dialogs.module.css'


type DialogItemType = {
    name: string
    id: string
}
export const DialogItem = (props: DialogItemType) => {
    return (
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

