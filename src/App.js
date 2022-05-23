import React, { useContext, useState } from 'react'
import { Route, Routes, HashRouter } from "react-router-dom";
import Container from '@mui/material/Container';
import jsCookie from 'js-cookie';
import Home from './routers/Home'
import Register from './routers/Register'
import Login from './routers/Login'
import Todos from './routers/Todos'
import NotFound from "./routers/NotFound";
import { UserContext } from './userContext';
import './css/App.css'
import Tasks from './routers/Tasks';

export default function App() {
    const [userContext, setUserContext] = useState({ logged: jsCookie.get('accessToken') !== undefined });
    return (
        <UserContext.Provider value={{ userContext, setUserContext }}>
            <Container maxWidth="md">
                <div className="App">
                    <Routers />
                </div>
            </Container>
        </UserContext.Provider>
    )
}

function Routers() {
    const { userContext } = useContext(UserContext)

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {userContext.logged
                    ? <>
                        <Route path="/todos">
                            <Route path=":TodoListId" element={<Todos />} />
                        </Route>
                        <Route path="/tasks">
                            <Route path=":TaskId" element={<Tasks/>} />
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
    )
}