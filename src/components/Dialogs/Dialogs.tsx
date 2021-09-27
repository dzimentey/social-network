import React, {ChangeEvent} from "react";
import c from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import {ActionsTypes, dialogsDataType, dialogsPageType, messagesDataType} from "../../Redux/store";
import {sendMessageAC, UpdateMessageBodyAC} from "../../Redux/dialogsReducer";

type DialogsPropsType = {
    //dialogsData: Array<dialogsDataType>
    //messagesData: Array<messagesDataType>
    //newMessageBody: string
    //dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (newText: string) => void
    sendMessage: () => void
    dialogsPage: dialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = state.messagesData.map(m => <MessageItem content={m.message}/>)

    const newMessageBody = state.newMessageBody

    const onMessageClick = () => {
        //props.dispatch(sendMessageAC())
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        //props.dispatch(UpdateMessageBodyAC(newText))
        props.updateNewMessageBody(newText)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={c.messages}>

                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  placeholder={'Type your text here'}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onMessageClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>

    )
}