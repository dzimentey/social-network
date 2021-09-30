

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
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }

}


export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: 'SET-USER-DATA', data: {
        id, email, login
    } as const
})


export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)