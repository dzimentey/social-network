import c from "../dialogs.module.css";
import React from "react";

type MessageType = {
    content: string
}
export const MessageItem = (props:MessageType) => {
    return(
        <div className={c.message}>{props.content}</div>
    )
}