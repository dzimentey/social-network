import { postsDataType, profilePageType,} from "./store";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";


export type ProfileReducerActionsTypes = ReturnType<typeof addPostAC> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus> | ReturnType<typeof deletePost>

export const addPostAC = (text: string) => {  //actionCreator with auto type
    return {
        type: 'ADD-POST',
        postText: text,
    } as const
}
// export const updateInputTextAC = (inputText: string) => { //actionCreator with auto type
//     return {
//         type: 'UPDATE-INPUT-TEXT',
//         inputText: inputText,
//     } as const
// }


const initialState: profilePageType = {

    postsData: [
        {id: '1', message: 'hi what\'s new', likesAmount: '6'},
        {id: '2', message: 'Hello i\'m an alien from planet of ww1', likesAmount: '15'},
        {id: '3', message: 'How is your going', likesAmount: '2'},
        {id: '4', message: 'What have you seen', likesAmount: '1'},
        {id: '5', message: 'Hello guys', likesAmount: '0'},
        {id: '6', message: 'Hello guys', likesAmount: '3'},
    ],
    profile: null,
    status: '',

}

export const profileReducer = (state: profilePageType = initialState, action: ProfileReducerActionsTypes) => {

    switch (action.type) {

        case 'ADD-POST':

            const newPost: postsDataType = {
                id: '7',
                message: action.postText,
                likesAmount: '0'
            };

            return {...state, postsData: [newPost, ...state.postsData,], newPostDataMessage: ""}

        // case 'UPDATE-INPUT-TEXT':
        //
        //     return {...state, newPostDataMessage: action.inputText}

        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}

        case 'SET-STATUS':

            return {...state, status: action.status}

        case "DELETE-POST":
            return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}

        default:
            return state;
    }

}

export const setUserProfile = (profile: any) => ({type: 'SET-USER-PROFILE', profile} as const)

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
   const data = await usersAPI.getUserData(userId)

        dispatch(setUserProfile(data))

}

export const setStatus = (status: string) => ({type: 'SET-STATUS',  status} as const)

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data))

}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export const deletePost = (postId: string) => ({type: 'DELETE-POST',  postId} as const);