import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Youtube from './components/Youtube';
import {Header} from './components/Header';
import Instagram from './components/Instagram';
ReactDOM.render(
  <React.StrictMode>
   
    <Router>
    <Header/>
      <Routes>
        <Route exact path='/' element={<App/>}/>
        <Route path='/yt' element={<Youtube/>}/>
        <Route path='/ig' element={<Instagram/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

