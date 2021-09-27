import React from "react";
import {stateType, StoreType} from "../../Redux/store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router";

type ProfileContainerPropsType = {
   // store: AppStateType//StoreType
    setUserProfile: (profile: any) => void
    profile: any
}

type PathParamType = {
    userId: string | any
}

type CommonPropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

 class ProfileContainerComponent extends React.Component<CommonPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){userId= 2 }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data );

            });

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainerComponent)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

