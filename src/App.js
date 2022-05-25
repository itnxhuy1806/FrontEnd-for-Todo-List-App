import React from 'react'
import './css/App.css'

import { HashRouter } from "react-router-dom";
import { useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import Authentication from './Authentication';
import NoAuthentication from './NoAuthentication';

export default function App() {
    const logged = useSelector(state => state.logged.value)
    const setting = useSelector(state => state.setting.value)
    return (
        <Container maxWidth="sm" className="App" style={{ backgroundColor: setting.color }}>
            <HashRouter>
                {logged ? <Authentication /> : <NoAuthentication />}
            </HashRouter>
        </Container>
    )
}
