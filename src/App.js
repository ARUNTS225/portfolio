import React from 'react';
import { Fragment } from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Profile from './routes/profile'
import About from './routes/about';
import Exp from './routes/experience';

function App() {
  return (
    <Fragment>
      {/* navbar */}
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href={'/'}>Navbar</a> */}
    <p class="h2 me-2 text-danger-emphasis">Portfolio</p>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link bg-secondary rounded mx-2" aria-current="page" to={'/'}>Profile</Link>
        <Link class="nav-link bg-secondary rounded mx-2" to={'/course'}>Courses</Link>
        <Link class="nav-link bg-secondary rounded mx-2" to={'/project'}>Projects</Link>
        {/* <a class="nav-link disabled" aria-disabled="true">Disabled</a> */}
      </div>
    </div>
  </div>
      </nav>
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/course' element={<Exp />}/>
        <Route path='/project' element={<About />}/>
      </Routes>

         
         </BrowserRouter>
         
    </Fragment>
    
  );
}

export default App;
