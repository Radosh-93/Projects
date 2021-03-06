import * as axios from "axios";

const instance = axios.create({ //створюємо базовий екземпляр для axios
    withCredentials: true,
    headers: {
        'API-KEY': 'ec2c25d4-a4bd-41e2-b939-cf3a13d5d5be'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}
export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    getFollowingStatus (id) {
        return instance.get(`follow/${id}`)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}