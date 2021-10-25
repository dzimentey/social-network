import React from "react";
import {ActionsTypes, dialogsPageType, stateType, StoreType} from "../../Redux/store";
import {sendMessageAC} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        // updateNewMessageBody: (newText: string) => {
        //     dispatch(UpdateMessageBodyAC(newText))
        // },
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}


const AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = compose<React.ComponentType>( // compose doesn't work without Type: <React.ComponentType>
    connect(mapStateToProps, mapDispatchToProps),             // 1-st wrapper
    withAuthRedirect                                          // 2-nd wrapper
)(Dialogs);                                                   // Component


