import React from "react";

export const ProfileDataForm = ({profile}: any) => {
    return (
        <form>
            {/*{isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}*/}
            <div><button onClick={()=>{} }>Save</button></div>
            <div>
                <b>Full Name:</b> {}
            </div>

            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            { profile.lookingForAJob &&
            <div>
                <b>My skills:</b> {profile.lookingForAJobDescription}
            </div>
            }

            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>

            {/*<div>*/}
            {/*    <b>Contacts: </b>  {Object.keys(profile.contacts).map(element => {*/}
            {/*    return <Contact key={element} contactTitle={element} contactValue={profile.contacts[element]} />*/}
            {/*})}*/}
            {/*</div>*/}
        </form>
    )
}