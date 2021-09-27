import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, postsDataType} from "../../../Redux/store";
import {addPostAC, updateInputTextAC} from "../../../Redux/profileReducer";


type MyPostsPropsType = {
    postsData: Array<postsDataType>
    addPost: (postText: string) => void
    updateInputText: (inputText: string) => void
    message: string
    //dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    const postsElements = props.postsData.map(p => <Post message={p.message} likesAmount={p.likesAmount}/>)

    const addNewPost = () => {

        let text = props.message
        // text ? props.dispatch({type: 'ADD-POST', postText: text}) : alert('message is expected')
        text ? props.addPost(text) : alert('message is expected')
        //text ? props.dispatch(addPostAC(text)) : alert('message is expected')
    }

    const onChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let inputText = e.currentTarget.value
        props.updateInputText(inputText)
        // props.dispatch({type: "UPDATE-INPUT-TEXT", inputText: e.currentTarget.value})
        //props.dispatch(updateInputTextAC(e.currentTarget.value))
    }

    return (
        <div>
            My posts

            <div>
                <textarea onChange={onChangeInputValue} value={props.message}/>
                {/*<textarea ref={newPostRef} onChange={onChangeInputValue} value={props.message}/>*/}
                <br/>
                <button onClick={addNewPost}>Add post</button>
            </div>

            {postsElements}

        </div>
    )
}







// import React, {ChangeEvent} from "react";
// import c from './MyPosts.module.css'
// import {Post} from "./Post/Post";
// import {ActionsTypes, postsDataType} from "../../../Redux/store";
// import {addPostAC, updateInputTextAC} from "../../../Redux/profileReducer";
//
//
// type MyPostsPropsType = {
//     postsData: Array<postsDataType>
//     //addPost: (postText: string) => void
//     //updateInputText: (inputText: string) => void
//     message: string
//     dispatch: (action: ActionsTypes) => void
// }
//
// export const MyPosts = (props: MyPostsPropsType) => {
//
//
//     const postsElements = props.postsData.map(p => <Post message={p.message} likesAmount={p.likesAmount}/>)
//
//     const addNewPost = () => {
//
//         let text = props.message
//         // text ? props.dispatch({type: 'ADD-POST', postText: text}) : alert('message is expected')
//         //text ? props.addPost(text) : alert('message is expected')
//         text ? props.dispatch(addPostAC(text)) : alert('message is expected')
//     }
//
//     const onChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         //let inputText = e.currentTarget.value
//         //props.updateInputText(inputText)
//         // props.dispatch({type: "UPDATE-INPUT-TEXT", inputText: e.currentTarget.value})
//         props.dispatch(updateInputTextAC(e.currentTarget.value))
//     }
//
//     return (
//         <div>
//             My posts
//
//             <div>
//                 <textarea onChange={onChangeInputValue} value={props.message}/>
//                 {/*<textarea ref={newPostRef} onChange={onChangeInputValue} value={props.message}/>*/}
//                 <br/>
//                 <button onClick={addNewPost}>Add post</button>
//             </div>
//
//             {postsElements}
//
//         </div>
//     )
// }