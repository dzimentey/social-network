import axios from "axios";

export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {

    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "49c9fc27-b65d-436b-ad55-f34f2b452a65"
        }
    })
        .then(response => {
            return response.data
        })
}

export const getUserData = (userId: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "49c9fc27-b65d-436b-ad55-f34f2b452a65"
        }
    })
        .then(response => {
            return response.data
        })
}