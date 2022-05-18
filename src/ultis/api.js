import axios from 'axios'
import jsCookie from "js-cookie";

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000
});
api.interceptors.request.use(function (config) {
    config.headers = { 'Authorization': `Bearer ${jsCookie.get('accessToken')}` }
    return config
})
api.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
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
//-----------Token-------------------------------

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

export function addTask(data, thenFunction) {
    api.post('tasks/create', data)
        .then(thenFunction)
        
}
export function deleteTask(id, thenFunction) {
    api.delete(`tasks/delete/${id}`)
        .then(thenFunction)
}
export function updateTask(id, data, thenFunction) {
    console.log(data)
    api.patch(`tasks/update/${id}`, data)
        .then(thenFunction)
}