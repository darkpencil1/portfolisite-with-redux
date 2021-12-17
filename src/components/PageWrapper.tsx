import React, {useState} from 'react';
import {
  NavLink, Route, Routes,
  } from 'react-router-dom';

//Pages
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';



function PageWrapper() {
  const [type, setType] = useState(true)
    return (
      
      <div className="text-center text-white bg-dark">
          <div className="container-fluid mx-auto">
            <div className="container-fluid main-container">
            <header className="mb-auto">
              <div>
                <h3 className="float-md-start mb-0 my-name">Ville Lähetkangas</h3>
                <nav className="nav nav-masthead justify-content-center float-md-end">
                  <NavLink end to="/" className={({ isActive }) => isActive? "active nav-link": 'nav-link'}>Home</NavLink>
                  <NavLink to="/portfolio" className={({ isActive }) => isActive? "active nav-link": 'nav-link'}>Portfolio</NavLink>
                  <NavLink to="/contact" className={({ isActive }) => isActive? "active nav-link": 'nav-link'}>Contact</NavLink>
                </nav>
              </div>
            </header>
            <div className="App-intro">
                <Routes>
                  <Route path="/" element={<Home/>}/> 
                  <Route path="/portfolio" element={<Portfolio />}/>
                  <Route path="/contact" element={<Contact/>}/>
                </Routes>  
            </div>
          </div> 
        </div>
      </div>
    )
}

export default PageWrapper;
