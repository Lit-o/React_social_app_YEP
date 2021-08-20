import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"
    }
});
//описываем метот getUsers в объекте usersAPI
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}
//сделали из функции объект с методом,
// чтобы в дальнейшем вызов метода был более понятным

// export const getUsers = (currentPage =1, pageSize= 3) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// }
