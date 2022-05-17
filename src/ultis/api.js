import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiaXRueGh1eTE4MDZAZ21haWwuY29tIiwidXNlcm5hbWUiOiJodXkiLCJpYXQiOjE2NTI2ODcxNTMsImV4cCI6MTY1Mjc3MzU1M30.kL2EgdHRAgGZ5YIJYsytzrrxeae9B4u82fhD2jzz6zQ"

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: { 'Authorization': `Bearer ${token}` }
});

function defaultCatchFunction() {
    return (error) => console.log(error)
}

export function getTodos(thenFunction) {
    api.get('/todos/all')
        .then(thenFunction)
        .catch(defaultCatchFunction)
}

export function addTodo(name, thenFunction) {
    api.post('todos/create', {name})
        .then(thenFunction)
        .catch(defaultCatchFunction)
}
export function deleteTodo(id, thenFunction) {
    api.delete(`todos/delete/${id}`)
        .then(thenFunction)
        .catch(defaultCatchFunction)
}
export function updateTodo(id, name, thenFunction) {
    api.patch(`todos/update/${id}`, { name })
        .then(thenFunction)
        .catch(defaultCatchFunction)
}
