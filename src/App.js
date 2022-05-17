import { Routes, Route } from "react-router-dom";
import Home from './routers/Home'
import Register from './routers/Register'
import Login from './routers/Login'
import './css/App.css'

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </div>
    );
}