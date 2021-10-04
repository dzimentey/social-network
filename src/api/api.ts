import axios from "axios";

const baseUrl: string = `https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({
        withCredentials: true,
        baseURL: baseUrl,
        headers: {
            "API-KEY": "49c9fc27-b65d-436b-ad55-f34f2b452a65"
        },
    }
)

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {

    return instance.get( `users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

export const getUserData = (userId: number) => {
    return instance.get( `profile/${userId}`, )
        .then(response => {
            return response.data
        })
}

export const unFollowUser = (id: string | number) => {
    return instance.delete(baseUrl + `follow/${id}`, )
        .then(response => {
            return response.data
        })
}

export const followUser = (id: string | number) => {
    return instance.post(baseUrl + `follow/${id}`, {}, )
        .then(response => {
            return response.data
        })
}