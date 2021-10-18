import React from "react";
import {Redirect} from "react-router-dom";

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any, any> {
        render() {
            if (this.props.isAuth === false) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    return RedirectComponent;
}