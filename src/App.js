import React from 'react';
import './css/App.css';
import {HashRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Authentication from './Authentication';
import NoAuthentication from './NoAuthentication';

export default function App() {
  const logged = useSelector(state => state.logged.value);
  return (
    <div className="App" style={{padding: 0}}>
      <HashRouter>
        {logged ? <Authentication /> : <NoAuthentication />}
      </HashRouter>
    </div>
  );
}
