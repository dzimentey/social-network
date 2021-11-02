import React from 'react';
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {AppStateType} from "./Redux/redux-store";
import {HeaderContainer} from "./components/Header/headerContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {initializeAppTC} from "./Redux/app-reducer";
import {Preloader} from "./components/coomon/preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";


type AppPropsType = {
    //store: AppStateType //StoreType
    initializeAppTC: () => void
    initialized: boolean
}


class App extends React.Component<AppPropsType, any> {

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

                        <Route /*exact*/ path={'/profile/:userId?'}
                                         render={() =>
                                             <ProfileContainer
                                                 //store={props.store}
                                                 //postsData={state.profilePage.postsData}
                                                 //message={state.profilePage.newPostDataMessage}
                                                 //dispatch={props.store.dispatch.bind(props.store)}
                                                 //addPost={props.store.addPost.bind(props.store)}
                                                 //updateInputText={props.store.updateInputText.bind(props.store)}
                                             />
                                         }
                        />
                        <Route path={'/dialogs'} render={() =>
                            <DialogsContainer
                                // store={props.store}
                            />

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

export default  compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC}))(App)

