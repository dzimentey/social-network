import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {authAPI} from "../../api/api";


type HeaderContainerComponentType = {
    //setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserData: () => void
}

 class HeaderContainerComponent extends React.Component<HeaderContainerComponentType, any> {
    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY": "49c9fc27-b65d-436b-ad55-f34f2b452a65"
        //     }
        // })

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
 export const HeaderContainer = connect(mapStateToProps, {getAuthUserData: getAuthUserData})(HeaderContainerComponent)