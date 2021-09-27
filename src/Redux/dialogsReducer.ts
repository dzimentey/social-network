import {ActionsTypes, dialogsPageType} from "./store";

export type UpdateMessageBodyType = {
    type: 'UPDATE-MESSAGE-BODY'
    newText: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
}
export const sendMessageAC = (): SendMessageType => { //actionCreator
    return {
        type: 'SEND-MESSAGE',
    }
}
export const UpdateMessageBodyAC = (newText: string): UpdateMessageBodyType => {  //actionCreator
    return {
        type: 'UPDATE-MESSAGE-BODY',
        newText: newText,
    }
}

const initState: dialogsPageType = {
    dialogsData: [
        {id: '1', name: 'Billy'},
        {id: '2', name: 'Frankie'},
        {id: '3', name: 'Mario'},
        {id: '4', name: 'Itzka'},
        {id: '5', name: 'Adam'},
        {id: '6', name: 'Hue'},
    ],
    messagesData: [
        {id: '1', message: 'Hello guys'},
        {id: '2', message: 'Hello you guys'},
        {id: '3', message: 'How is your going'},
        {id: '4', message: 'What have you seen'},
        {id: '5', message: 'Hello guys'},
        {id: '6', message: 'Hello guys'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: dialogsPageType = initState, action: ActionsTypes) => {

    switch (action.type) {

        case 'UPDATE-MESSAGE-BODY':

            return {...state, newMessageBody: action.newText}

        case 'SEND-MESSAGE':
            let messageText = state.newMessageBody

            return {
                ...state,
                messagesData: [...state.messagesData, {id: '7', message: messageText}],
                newMessageBody: "",
            }
    }

    return state
}
