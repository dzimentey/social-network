import {getAuthUserData} from "./auth-reducer";


type initializedType = {
    initialized: boolean

}

type initialisedActionType = ReturnType<typeof initializedSuccess>

const initialState: initializedType = {

    initialized: false,

}

export const appReducer = (state = initialState, action: initialisedActionType): initializedType => {

    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true,

            }
        default:
            return state;
    }

}


export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS',} as const)


export const initializeAppTC = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
        }
    )

}

