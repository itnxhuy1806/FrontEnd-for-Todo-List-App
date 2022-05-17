import { Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import Home from './routers/Home'
import Register from './routers/Register'
import Login from './routers/Login'
import Todos from './routers/Todos'
import './css/App.css'

export default function App() {
    return (
        <Container maxWidth="md">
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="todos">
                        <Route path=":TodoListId" element={<Todos />} />
                    </Route>
                </Routes>
            </div>
        </Container>
    );
}