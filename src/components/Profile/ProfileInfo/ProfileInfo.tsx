import React from "react";
import {Preloader} from "../../coomon/preloader/Preloader";
import userPhoto from "../../../assets/images/homer-warrior.jpg";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img alt={'warriors'} width={'100%'} height={'350 px'}*/}
            {/*         src={'https://petapixel.com/assets/uploads/2016/10/earnestbrooks.jpg'}/>*/}
            {/*</div>*/}

            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

