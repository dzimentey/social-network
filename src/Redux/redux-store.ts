import {applyMiddleware, combineReducers, compose, createStore, Store,} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
    }
)

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store<AppStateType> = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export type AppStateType = ReturnType<typeof rootReducer>

//export let store: Store<AppStateType>  = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

// @ts-ignore
window.__store__ = store