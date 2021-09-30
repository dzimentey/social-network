import { combineReducers, createStore, } from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {StoreType} from "./store";
import {usersReducer} from "./users-reducer";
import {Provider} from "react-redux";
import {authReducer} from "./auth-reducer";


let rootReducer = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
    }
)
export type AppStateType = ReturnType<typeof rootReducer>

export let store: AppStateType | any = createStore(rootReducer)
