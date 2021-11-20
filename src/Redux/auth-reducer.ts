import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";


const SET_USER_DATA = 'social-network/auth/SET-USER-DATA'

type UserServerType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

type UserActionServerType = ReturnType<typeof setAuthUserData>

const initialState: UserServerType = {

    id: null,
    email: null,
    login: null,
    isAuth: false
    //isFetching: false,
}

export const authReducer = (state = initialState, action: UserActionServerType): UserServerType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state;
    }

}


export const setAuthUserData = (id: null | number, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA, payload: {
        id, email, login, isAuth
    } as const
})

export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()

            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe)

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                let action = stopSubmit('login', {_error: errorMessage});
                dispatch(action)
            }

}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}