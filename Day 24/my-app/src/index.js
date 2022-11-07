import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Outlet, Route, Link, BrowserRouter as Router  } from 'react-router-dom';
 
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';
import Emps from './Components/Emps';
import Details from './Components/Details';
 

const routing  = (

    <Router>
        <h3 align="center">Routing implementation in React JS</h3>
        <hr/>
        <div style={{textAlign: 'center'}}> 
            <Link to="/">Home</Link> |
            <Link to="/Employees">Employees</Link> |
            <Link to="/Admin">Admin</Link> |
            <Link to="/About">About</Link> |
            <Link to="/Contact">Contact</Link> |       
            <Link to="/Hello">Invalid</Link> |       
        </div>
        <hr/>
        <Routes>
            <Route path="/"  element = { <App /> }  />
            <Route path="/Employees"  element = { <Emps /> }  />
            <Route path="/Details/:id"  element = { <Details  /> }  />
            <Route path="/About"  element = { <About /> }  />
            <Route path="/Contact"  element = { <Contact /> }  />
            <Route path="*"  element = { <NotFound /> }  />
 
            <Route path="/Admin" element= { <Admin />  }>
                  <Route index  element= { <AdminHome />  }  />
                  <Route path="Projects" element= { <Projects />  }  />
                  <Route path="Customers" element= { <Customers />  }  />
            </Route> 

        </Routes>
    </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
); 




function  Admin()
{
  return (
    <div style={{border:"2px solid blue", margin : "20px", padding: "20px", backgroundColor : "LightYellow"}}>
      <h3>This is Admin Component</h3>
          <Link    to="">AdminHome</Link>  |
          <Link    to="Projects">Projects</Link>  |
          <Link    to="Customers">Customers</Link>  |
          
          <Outlet />

    </div>
  );
}

function  Projects()
{
  return (
    <div>
      <h3>This is Projects Component</h3>
    </div>
  );
}


function  Customers()
{
  return (
    <div>
      <h3>This is Customers Component</h3>
    </div>
  );
}

function  AdminHome()
{
  return (
    <div>
      <h3>This is Admin Home Content</h3>
    </div>
  );
}