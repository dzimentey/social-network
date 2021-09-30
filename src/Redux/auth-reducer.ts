export type UserType = {
    id: string
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }
    photos: { small: string, large: string }
}
export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


type UserServerType = {
    userId: null | number
    email: null | string
    login: null | string
}

type UserActionServerType = ReturnType<typeof setUserData>

const initialState: UserServerType = {

    userId: null,
    email: null,
    login: null,
    //isFetching: false,
}

export const authReducer = (state = initialState, action: UserActionServerType): UserServerType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }

}


export const setUserData = (userId: number, email: string, login: string) => ({type: 'SET-USER-DATA', data: {
    userId, email, login} as const
})


export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)