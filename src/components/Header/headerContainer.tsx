
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";



type HeaderContainerComponentType = {
    //setAuthUserData: (id: number, email: string, login: string) => void
    //getAuthUserData: () => void
}

 class HeaderContainerComponent extends React.Component<HeaderContainerComponentType, any> {

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
 export const HeaderContainer = connect(mapStateToProps, { logout})(HeaderContainerComponent)