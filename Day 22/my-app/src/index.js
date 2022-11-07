import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Outlet, Route, Link, BrowserRouter as Router  } from 'react-router-dom';
import Login from './Login';
import Emps from './Employee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path="/Employee" element={<Emps/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    <h3 align="center">Routing implementation in React JS</h3>
        <hr/>
        <div style={{textAlign: 'center'}}> 
            <Link to="/">Home</Link> |
            <Link to="/Employee">Employee</Link> |
            <Link to="/Login">Login</Link> |    

        </div>
        <hr/>
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
