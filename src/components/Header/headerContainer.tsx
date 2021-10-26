import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {authAPI} from "../../api/api";


type HeaderContainerComponentType = {
    //setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserData: () => void
}

 class HeaderContainerComponent extends React.Component<HeaderContainerComponentType, any> {
    componentDidMount() {



       this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
 export const HeaderContainer = connect(mapStateToProps, {getAuthUserData: getAuthUserData, logout})(HeaderContainerComponent)