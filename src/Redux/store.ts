import {addPostAC, profileReducer, setUserProfile, updateInputTextAC} from "./profileReducer";
import {dialogsReducer, SendMessageType, UpdateMessageBodyType} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type messagesDataType = {
    id: string
    message: string
}
export type dialogsDataType = {
    id: string
    name: string
}
export type postsDataType = {
    id: string
    message: string
    likesAmount: string
}
export type profilePageType = {
    postsData: Array<postsDataType>
    newPostDataMessage: string
    profile: any
}
export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageBody: string
}
export type sidebarType = {}
export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
export type StoreType = {
    _state: stateType
    rerenderTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateInputTextAC> |
    UpdateMessageBodyType | SendMessageType | ReturnType<typeof setUserProfile>

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostDataMessage: '',
            postsData: [
                {id: '1', message: 'hi what\'s new', likesAmount: '6'},
                {id: '2', message: 'Hello i\'m an alien from planet of ww1', likesAmount: '15'},
                {id: '3', message: 'How is your going', likesAmount: '2'},
                {id: '4', message: 'What have you seen', likesAmount: '1'},
                {id: '5', message: 'Hello guys', likesAmount: '0'},
                {id: '6', message: 'Hello guys', likesAmount: '3'},
            ],
            profile: null,

        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    rerenderTree() {
    },
    subscribe(observer: () => void) {
        this.rerenderTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.rerenderTree()

    },
}


