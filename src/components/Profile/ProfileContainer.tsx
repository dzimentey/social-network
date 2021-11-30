import React from "react";

import {Profile} from "./Profile";

import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../Redux/profileReducer";
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
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    status: string
    authorisedUseId: string | number
    savePhoto: (e: any) => void
}

type PathParamType = {
    userId: string | any

}

type CommonPropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, any> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUseId;
            if (!userId){this.props.history.push('/login')}
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
       this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<any>, snapshot?: any) {

        if (this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshProfile()
    }}

    render() {

        //if (this.props.isAuth === false) return <Redirect to={'/login'}/>

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}
            isOwner={!!this.props.match.params.userId} savePhoto={this.props.savePhoto}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUseId: state.auth.id,
    isAuth: state.auth.isAuth,
})


// let AuthRedirectComponent: any = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}), // 1-st wrapper
    withRouter,                                                 // 2-nd wrapper
    //withAuthRedirect                                            // 3-rd wrapper
)(ProfileContainer);                                   // Component