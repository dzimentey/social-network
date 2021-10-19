import React from "react";

import {Profile} from "./Profile";

import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type ProfileContainerPropsType = {
    // store: AppStateType//StoreType
   //setUserProfile: (profile: any) => void
    profile: any
    getUserProfile: (userId: number) => void
    isAuth: boolean
}

type PathParamType = {
    userId: string | any

}

type CommonPropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainerComponent extends React.Component<CommonPropsType, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY" : "49c9fc27-b65d-436b-ad55-f34f2b452a65"
        //     }
        // })
        this.props.getUserProfile(userId)

    }

    render() {

        //if (this.props.isAuth === false) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    // isAuth: state.auth.isAuth,
})


let AuthRedirectComponent : any = withAuthRedirect(ProfileContainerComponent);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)



export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}), // 1-st wrapper
    withRouter,                                                 // 2-nd wrapper
    //withAuthRedirect                                            // 3-rd wrapper
)(ProfileContainerComponent);                                   // Component