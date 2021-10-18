import React from "react";
import {ActionsTypes, dialogsPageType, stateType, StoreType} from "../../Redux/store";
import {sendMessageAC, UpdateMessageBodyAC} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (newText: string) => {
            dispatch(UpdateMessageBodyAC(newText))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

const AuthRedirectComponent = (props: any) => {
    if (props.isAuth === false) return <Redirect to={'/login'}/>
    return <Dialogs {...props}/>
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


// type DialogsContainerPropsType = {
//     store: StoreType
// }
//
// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//
//     let dialogsPage: dialogsPageType = props.store.getState().dialogsPage
//
//     const onMessageClick = () => {
//         props.store.dispatch(sendMessageAC())
//     }
//
//     const onNewMessageChange = (newText: string) => {
//         props.store.dispatch(UpdateMessageBodyAC(newText))
//     }
//
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onMessageClick}
//                  dialogsPage={dialogsPage}
//         />
//     )
// }