import {ActionsTypes, postsDataType, profilePageType,} from "./store";


// export type ProfileReducerActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateInputTextAC> |
//                                           ReturnType<typeof setUserProfile>

export const addPostAC = (text: string) => {  //actionCreator with auto type
    return {
        type: 'ADD-POST',
        postText: text,
    } as const
}
export const updateInputTextAC = (inputText: string) => { //actionCreator with auto type
    return {
        type: 'UPDATE-INPUT-TEXT',
        inputText: inputText,
    } as const

}
export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)


const initialState: profilePageType = {
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

}

export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {

        case 'ADD-POST':

            const newPost: postsDataType = {
                id: '7',
                message: action.postText,
                likesAmount: '0'
            };

            return {...state, postsData: [newPost, ...state.postsData,], newPostDataMessage: ""}

        case 'UPDATE-INPUT-TEXT':

            return {...state, newPostDataMessage: action.inputText}

        case "SET-USER-PROFILE":
            return {...state, profile : action.profile}

        default:
            return state;
    }

}