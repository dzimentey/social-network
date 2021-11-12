import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, postsDataType} from "../../../Redux/store";

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../Utilits/validators/validators";
import {Textarea} from "../../coomon/FormsControls";



type MyPostsPropsType = {
    postsData: Array<postsDataType>
    addPost: (postText: string) => void
    //updateInputText: (inputText: string) => void
    //message: string
    //dispatch: (action: ActionsTypes) => void
}

export const MyPosts = React.memo( (props: MyPostsPropsType) => {


    const postsElements = props.postsData.map(p => <Post message={p.message} likesAmount={p.likesAmount}/>)

    // const addNewPost = () => {
    //
    //     let text = props.message
    //     // text ? props.dispatch({type: 'ADD-POST', postText: text}) : alert('message is expected')
    //     text ? props.addPost(text) : alert('message is expected')
    //     //text ? props.dispatch(addPostAC(text)) : alert('message is expected')
    // }

    // const onChangeInputValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let inputText = e.currentTarget.value
    //     props.updateInputText(inputText)
    //     // props.dispatch({type: "UPDATE-INPUT-TEXT", inputText: e.currentTarget.value})
    //     //props.dispatch(updateInputTextAC(e.currentTarget.value))
    // }

    const onAddPost = (values: newPostType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            My posts

            {/*<form>*/}
            {/*    <textarea onChange={onChangeInputValue} value={props.message}/>*/}
            {/*    /!*<textarea ref={newPostRef} onChange={onChangeInputValue} value={props.message}/>*!/*/}
            {/*    <br/>*/}
            {/*    <button onClick={addNewPost}>Add post</button>*/}
            {/*</form>*/}

            <ReduxPostForm onSubmit={onAddPost}/>

            {postsElements}

        </div>
    )
})


const maxLength10 = maxLengthCreator(10)

type newPostType = {
    newPostText: string
}

const addPostForm: React.FC<InjectedFormProps<newPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={'newPostText'} placeholder={'Type your post here'}
                   validate={[requiredField, maxLength10]}/>

            <button type={'submit'}>Add post</button>
        </form>
    )
}

const ReduxPostForm = reduxForm<newPostType | any>({
    form: 'ProfileAddNewPostForm' // unique name of using form
}) (addPostForm)