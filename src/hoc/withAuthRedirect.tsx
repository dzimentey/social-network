import React from "react";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../Redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (this.props.isAuth === false) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent;
}