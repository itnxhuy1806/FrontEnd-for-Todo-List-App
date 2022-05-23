import axios from 'axios'
import jsCookie from "js-cookie";
import * as TOKEN from './token'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    responseType: "json",
});

api.interceptors.request.use(function (config) {
    config.headers = { 'Authorization': `Bearer ${jsCookie.get('accessToken')}`,'content-type': 'application/json' }
    return config
})
api.interceptors.response.use(
    function (response) {
        return response
    },
    async function (error) {
        const originalRequest = error.config;
        const { status, statusText } = error.response.request
        if (status === 401 && statusText === "Unauthorized" && originalRequest._retry)
            return TOKEN.removeToken()
        if (status === 401 && statusText === "Unauthorized" && !originalRequest._retry) {
            originalRequest._retry = true;
            const newAccessToken = await getNewAccessToken() 
            jsCookie.set('accessToken', newAccessToken)
            return api(originalRequest)
        }
        return Promise.reject(error)
    });

//-----------Users--------------------------------
export function register(data, thenFunction) {
    api.post('/users/register', data)
        .then(thenFunction)
}
export function login(data, thenFunction) {
    api.post('/users/login', data)
        .then(thenFunction)
}
export function logout(thenFunction) {
    api.get('/users/logout')
        .then(thenFunction)
}
//-----------Token-------------------------------
async function getNewAccessToken() {
    let newAccessToken
    await axios.get('http://localhost:8080/api/token/newAccessToken', { headers: { 'Authorization': `Bearer ${jsCookie.get('refreshToken')}` } })
        .then(function (response) {
            newAccessToken = response.data.data.accessToken
        })
    return newAccessToken
}
//-----------Todos--------------------------------

export function getTodos(thenFunction) {
    api.get('/todos/all')
        .then(thenFunction)
}

export function addTodo(name, thenFunction) {
    api.post('todos/create', { name })
        .then(thenFunction)
}
export function deleteTodo(id, thenFunction) {
    api.delete(`todos/delete/${id}`)
        .then(thenFunction)
}
export function updateTodo(id, name, thenFunction) {
    api.patch(`todos/update/${id}`, { name })
        .then(thenFunction)
}

//-----------Tasks--------------------------------

export function getTasks(id, thenFunction) {
    api.get(`/todos/detail/${id}`)
        .then(thenFunction)
}

export function getTask(id, thenFunction) {
    api.get(`/tasks/detail/${id}`)
        .then(thenFunction)
}

export function addTask(data, thenFunction) {
    api.post('tasks/create', data)
        .then(thenFunction)

}
export function deleteTask(id, thenFunction) {
    api.delete(`tasks/delete/${id}`)
        .then(thenFunction)
}
export function updateTask(id, data, thenFunction) {
    api.patch(`tasks/update/${id}`, data)
        .then(thenFunction)
}