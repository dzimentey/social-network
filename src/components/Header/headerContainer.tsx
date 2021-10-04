import axios from "axios";
import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type HeaderContainerComponentType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

 class HeaderContainerComponent extends React.Component<HeaderContainerComponentType, any> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
            headers: {
                "API-KEY": "49c9fc27-b65d-436b-ad55-f34f2b452a65"
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }
    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});
 export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderContainerComponent)