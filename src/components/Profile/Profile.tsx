import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postsDataType, StoreType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../Redux/redux-store";

type ProfilePropsType = {
    //postsData: Array<postsDataType>
    // addPost: (postText: string) => void
    //updateInputText: (inputText: string) => void
    //message: string
    //dispatch: (action: ActionsTypes) => void
    //store: AppStateType//StoreType
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>

            {/*<MyPosts postsData={props.postsData} message={props.message}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*    addPost={props.addPost}*/}
            {/*    updateInputText={props.updateInputText}*/}
            {/*/>*/}
        </div>

    )
}