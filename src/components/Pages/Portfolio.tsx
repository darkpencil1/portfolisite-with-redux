import React, {Component} from 'react';
import PortfolioButtons from '../Common/PortfolioButtons';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './Contact';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { RootState } from "../../app/store";

//Re-usable components
import {Digital, Traditional} from '../Common/ArtContainer'

type Props = {
  type: boolean
}


function Portfolio(){

  const dispatch = useDispatch();
  //Gets the state for type from store
  const medium = useSelector((state: RootState)=>state.medium.value.medium)
 

  return(
      <div className="text-center text-white bg-dark">
          <main>
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Ville's portfolio</h1>
                  <p className="lead">My work happens on both digital and traditional realms. I find they compliment each other quite nicely. </p>
                  <p className="lead">
                  <Link to= "/contact" className="btn btn-md btn-primary fw-bold border-blue">Contact me</Link>
                  <Routes>
                  <Route path="/contact" element={<Contact/>}/>
                  </Routes>    
                  </p>
                </div>
              </div>
            </section>
            <PortfolioButtons >
            {medium ? <Digital/> : <Traditional/>}
            </PortfolioButtons>
          </main>

          <footer className="text-muted py-5">
            <div className="container">
              <p className="float-end mb-1">
                <a href="#">Back to top</a>
              </p>
            </div>
          </footer>
        </div>
  )
  
}

export default Portfolio;
