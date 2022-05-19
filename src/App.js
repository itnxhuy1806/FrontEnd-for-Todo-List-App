import { Route, Routes } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './routers/Home'
import Register from './routers/Register'
import Login from './routers/Login'
import Todos from './routers/Todos'
import NotFound from "./routers/NotFound";
import jsCookie from "js-cookie";
import { useState } from 'react'
import './css/App.css'

export default function App() {
    const [logged, setLogged] = useState(jsCookie.get('accessToken') !== undefined)
    return (
        <Container maxWidth="md">
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home {...{ logged, setLogged }} />} />
                    {logged
                        ? <>
                            <Route path="/todos">
                                <Route path=":TodoListId" element={<Todos />} />
                            </Route>
                        </>
                        : <>
                            <Route path="/login" element={<Login {...{ logged, setLogged }} />} />
                            <Route path="/register" element={<Register {...{ logged, setLogged }} />} />
                        </>
                    }
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Container>
    )
}