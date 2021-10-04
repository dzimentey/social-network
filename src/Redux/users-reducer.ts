// const addPostAC = (text: string) => {  //actionCreator with auto type
//     return {
//         type: 'ADD-POST',
//         postText: text,
//     } as const
// }
// const updateInputTextAC = (inputText: string) => { //actionCreator with auto type
//     return {
//         type: 'UPDATE-INPUT-TEXT',
//         inputText: inputText,
//     } as const
//
// }

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
    isFollowingProcess: boolean
}

type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}

type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}

export type UserActionsType =
    FollowActionType | UnfollowActionType | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching> | ReturnType< typeof toggleFollowingProcess>

const initialState: UsersStateType = {

    users: [
        // {
        //     id: '1',
        //     photoUrl: "https://static.planetminecraft.com/files/resource_media/screenshot/1218/mp1335340272752_2126903_thumb.jpg",
        //     followed: false,
        //     name: 'Maverick',
        //     status: 'Huge wave',
        //     location: {city: 'Half Moon Bay', country: 'US'}
        // },
        // {
        //     id: '2',
        //     photoUrl: 'https://ru.warface.com/forums/image.php?u=1248304&dateline=1399797419',
        //     followed: true,
        //     name: 'Big Rock',
        //     status: 'Boss',
        //     location: {city: 'Rock City', country: 'Mexico'}
        // },
        // {
        //     id: '3',
        //     photoUrl: 'https://gif-avatars.com/img/100x100/homer-stoned.gif',
        //     followed: false,
        //     name: 'Hermes',
        //     status: 'Supervisor',
        //     location: {city: 'Boca Chica', country: 'Dominicana'}
        // }
    ],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    isFollowingProcess: false,
}

export const usersReducer = (state = initialState, action: UserActionsType): UsersStateType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u
                    }
                )
            }

        case "UNFOLLOW":
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }

        case "SET-USERS": {
            return {...state, users: [...action.users,]} //...state.users
        }

        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }

        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROCESS": {
            return  {...state, isFollowingProcess: action.isFetching}
        }

        default:
            return state;
    }

}

export const follow = (userId: string): FollowActionType => ({type: 'FOLLOW', userId})
export const unfollow = (userId: string): UnfollowActionType => ({type: 'UNFOLLOW', userId})
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)
export const toggleFollowingProcess = (isFetching: boolean) => ({type: 'TOGGLE-IS-FOLLOWING-PROCESS', isFetching} as const)
