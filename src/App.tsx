import React, {Suspense} from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import {AppStateType} from "./Redux/redux-store";
import {HeaderContainer} from "./components/Header/headerContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {Preloader} from "./components/coomon/preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

type AppPropsType = {
    //store: AppStateType //StoreType
    initializeAppTC: () => void
    initialized: boolean
}


class App extends React.Component<AppPropsType> {

    componentDidMount() {

        this.props.initializeAppTC()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className="App">
                <HeaderContainer/>
                <Nav/>

                <div className={'content'}>

                    <Route path={'/profile/:userId?'} render={() =>
                        <Suspense fallback={'Loading...'}>
                            <ProfileContainer  // lazy loaded component, shows 'Loading' while component is loading
                                //store={props.store}
                                //postsData={state.profilePage.postsData}
                                //message={state.profilePage.newPostDataMessage}
                                //dispatch={props.store.dispatch.bind(props.store)}
                                //addPost={props.store.addPost.bind(props.store)}
                                //updateInputText={props.store.updateInputText.bind(props.store)}
                            />
                        </Suspense>
                    }
                    />
                    <Route path={'/dialogs'} render={() =>
                        <Suspense fallback={'Loading...'}>
                            <DialogsContainer // lazy loaded component, shows 'Loading' while component is loading
                            />
                        </Suspense>
                        //     <Dialogs dialogsData={state.dialogsPage.dialogsData}
                        //                                                 messagesData={state.dialogsPage.messagesData}
                        //                                                 newMessageBody={state.dialogsPage.newMessageBody}
                        //                                                 dispatch={props.store.dispatch.bind(props.store)}
                        // />
                    }
                    />
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>

                </div>
                {/*<Footer/>*/}
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)

