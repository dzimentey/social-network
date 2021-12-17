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

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
}

const getUserData = (userId: number) => {
    return instance.get(`profile/${userId}`,)
        .then(response => {
            return response.data
        })
}

export const unFollowUser = (id: string | number) => {
    return instance.delete(baseUrl + `follow/${id}`,)
        .then(response => {
            return response.data
        })
}

export const followUser = (id: string | number) => {
    return instance.post(baseUrl + `follow/${id}`, {},)
        .then(response => {
            return response.data
        })
}


export const usersAPI = {

    getUsers(currentPage: number = 1, pageSize: number = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    getUserData(userId: number) {
        return profileAPI.getProfile(userId)
    },

    unFollowUser(id: string | number) {
        return instance.delete(baseUrl + `follow/${id}`,)
            .then(response => {
                return response.data
            })
    },

    followUser(id: string | number) {
        return instance.post(baseUrl + `follow/${id}`, {},)
            .then(response => {
                return response.data
            })
    },

};


export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password : string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email , password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },

};

export const profileAPI = {

    getProfile(userId: number) {
        return instance.get(`profile/${userId}`,)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(file: File) {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData, )
    },
};