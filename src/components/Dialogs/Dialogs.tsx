import React, {ChangeEvent} from "react";
import c from './dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Message/MessageItem";
import {  dialogsPageType,} from "../../Redux/store";
import {Redirect} from "react-router-dom";
import  {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../coomon/FormsControls";
import {maxLengthCreator, requiredField} from "../../Utilits/validators/validators";

type DialogsPropsType = {
    //dialogsData: Array<dialogsDataType>
    //messagesData: Array<messagesDataType>
    //newMessageBody: string
    //dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (newText: string) => void
    sendMessage: (message?: string) => void
    dialogsPage: dialogsPageType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    const dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)

    const messagesElements = state.messagesData.map(m => <MessageItem content={m.message}/>)

   // const newMessageBody = state.newMessageBody

    // const onMessageClick = () => {
    //     //props.dispatch(sendMessageAC())
    //     props.sendMessage()
    // }

    // const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let newText = e.currentTarget.value
    //     //props.dispatch(UpdateMessageBodyAC(newText))
    //     props.updateNewMessageBody(newText)
    // }

    const addNewMessage = (value: AddMessageFormType) => {

        props.sendMessage(value.newMessageBody);
    }

    if (props.isAuth === false) return <Redirect to={'/login'}/>

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={c.messages}>

                <div>{messagesElements}</div>
                {/*<form>*/}
                {/*    <div>*/}
                {/*        <textarea value={newMessageBody}*/}
                {/*                  placeholder={'Type your text here'}*/}
                {/*                  onChange={onNewMessageChange}>*/}
                {/*        </textarea>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={onMessageClick}>Add</button>*/}
                {/*    </div>*/}
                {/*</form>*/}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>

    )
}

const maxLength50 = maxLengthCreator(50)

type AddMessageFormType = {

    newMessageBody: string

}

const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name = {'newMessageBody'} placeholder={'Type your text here'}
                validate = {[requiredField, maxLength50]}/>

            </div>
            <div>
                <button type={"submit"}>Add</button>
            </div>
        </form>

    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType & any>({
    form: 'dialogAddMessageForm' // unique name of using form
}) (AddMessageForm)