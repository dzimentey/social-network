import {authAPI} from "../api/api";


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
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state;
    }

}


export const setAuthUserData  = (id: null | number , email: string | null, login: string | null, isAuth: boolean )  => ({
    type: 'SET-USER-DATA', payload: {
        id, email, login, isAuth
    } as const
})


export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch: any) => {
    authAPI.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}