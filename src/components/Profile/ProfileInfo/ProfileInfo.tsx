import React, {ChangeEvent} from "react";
import {Preloader} from "../../coomon/preloader/Preloader";
import defaultPhoto from "../../../assets/images/homer-warrior.jpg";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img alt={'warriors'} width={'100%'} height={'350 px'}*/}
            {/*         src={'https://petapixel.com/assets/uploads/2016/10/earnestbrooks.jpg'}/>*/}
            {/*</div>*/}

            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto}/>
                {props.isOwner || <div><input type="file" onChange={onPhotoSelected}/></div>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

