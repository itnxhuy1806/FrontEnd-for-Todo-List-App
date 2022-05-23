import React from 'react'
import { Route, Routes, HashRouter } from "react-router-dom";
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import Home from './routers/Home'
import Register from './routers/Register'
import Login from './routers/Login'
import Todos from './routers/Todos'
import NotFound from "./routers/NotFound";
import './css/App.css'
import Tasks from './routers/Tasks';

export default function App() {
    const logged = useSelector(state => state.logged.value)

    return (
        <Container maxWidth="md">
            <div className="App">
            <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {logged
                    ? <>
                        <Route path="/todos">
                            <Route path=":TodoListId" element={<Todos />} />
                        </Route>
                        <Route path="/tasks">
                            <Route path=":TaskId" element={<Tasks />} />
                        </Route>
                    </>
                    : <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </>
                }
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
            </div>
        </Container>
    )
}
