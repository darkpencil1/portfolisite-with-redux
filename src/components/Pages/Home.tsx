import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolio';


//Re-usable components
import HomeCard from '../Common/HomeCard';

//images
import satyr from "../images/satyr01.jpg"
import sibelius from "../images/Sibelius02-web.jpg"


const descriptions = [
  {image: satyr, title: "Digital art", description: "Imagery ranging from themes such as people and space.", featured: false, type: "digital"},
  {image:sibelius, title: "Traditional art", description: "My traditional art is made on a regular drawing paper with black graphite pencils.", featured: true, type: "traditional"},
]



const Home = () =>{

  

  return(
    <>
      
      <div className="text-center text-white bg-dark">
        <div className="container-fluid mx-auto">

          <main className="px-3">
            <div className="container front-text">
              <h1 className="fw-light">Ville's portfolio</h1>
              <p className="lead">Hello and welcome to my portfolio site!</p>
              <p className="lead">
                
                <Link to= '/portfolio' className="btn btn-md btn-primary fw-bold border-blue">Learn more</Link>
              </p>
              <div>
              <Routes>
              <Route path="/portfolio" element={<Portfolio/>}/>
              </Routes>
              </div>
            </div>
              
            <div className="container art-container">
              <div className="row gx-18 row-cols-md-2 g-4 justify-content-center">
                {descriptions.map((item, i)=>{
                  return(
                    <HomeCard key = {i}
                      image = {item.image}
                      title = {item.title}
                      description = {item.description}
                      featured = {item.featured}
                      type= {item.type}
                
                    />
                  )
                })}
              </div>
            </div>
          </main>

          <footer className="mt-auto text-white-50">
            <p className="my-footer" style={{marginBottom:'0px'}}>Ville Lähetkangas 2021</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home;


