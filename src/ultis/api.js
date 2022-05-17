import axios from 'axios'

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiaXRueGh1eTE4MDZAZ21haWwuY29tIiwidXNlcm5hbWUiOiJodXkiLCJpYXQiOjE2NTI3NzMxNDEsImV4cCI6MTY1Mjg1OTU0MX0.-Yc-ywFT_V3Gzb4dDIPHvLWPwHYZnyqU3MAk5wHz0P8"

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: { 'Authorization': `Bearer ${token}` }
});

function defaultCatchFunction() {
    return (error) => console.log(error)
}

//-----------Todo--------------------------------

export function getTodos(thenFunction) {
    api.get('/todos/all')
        .then(thenFunction)
        .catch(defaultCatchFunction)
}

export function addTodo(name, thenFunction) {
    api.post('todos/create', { name })
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

//-----------Task--------------------------------

export function getTasks(id, thenFunction) {
    api.get(`/todos/detail/${id}`)
        .then(thenFunction)
        .catch(defaultCatchFunction)
}

export function addTask(data, thenFunction) {
    api.post('tasks/create', data)
        .then(thenFunction)
        .catch(defaultCatchFunction)
}
export function deleteTask(id, thenFunction) {
    api.delete(`tasks/delete/${id}`)
        .then(thenFunction)
        .catch(defaultCatchFunction)
}
export function updateTask(id, data, thenFunction) {
    console.log(data)
    api.patch(`tasks/update/${id}`, data)
        .then(thenFunction)
        .catch(defaultCatchFunction)
}