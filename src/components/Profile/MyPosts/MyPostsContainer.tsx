import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ActionsTypes, postsDataType, stateType, StoreType} from "../../../Redux/store";
import {addPostAC} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state: stateType) => {
    return {
        postsData: state.profilePage.postsData,
       // message: state.profilePage.newPostDataMessage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        // updateInputText: (inputText: string) => {
        //     dispatch(updateInputTextAC(inputText))
        // },
        addPost: (text: string) => {

            dispatch(addPostAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


// type MyPostsContainerPropsType = {
//     //postsData: Array<postsDataType>
//     //addPost: (postText: string) => void
//     //updateInputText: (inputText: string) => void
//     //message: string
//     //dispatch: (action: ActionsTypes) => void
//     store: StoreType
// }
//
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     let state: stateType = props.store.getState()
//
//     const addPost = (text: string) => {
//
//         //let text = state.profilePage.newPostDataMessage
//         // text ? props.dispatch({type: 'ADD-POST', postText: text}) : alert('message is expected')
//         //text ? props.addPost(text) : alert('message is expected')
//         props.store.dispatch(addPostAC(text))
//     }
//
//     const onChangeInputValue = (inputText: string) => {
//         //let inputText = e.currentTarget.value
//         //props.updateInputText(inputText)
//         // props.dispatch({type: "UPDATE-INPUT-TEXT", inputText: e.currentTarget.value})
//         props.store.dispatch(updateInputTextAC(inputText))
//     }
//
//     return (
//         <MyPosts postsData={state.profilePage.postsData} message={state.profilePage.newPostDataMessage}
//                  updateInputText={onChangeInputValue}
//                  addPost={addPost}
//         />
//     )
// }