import React from "react";
import ArtModal from "./ArtModal";

//images
//traditional
import sibelius02 from '../images/Sibelius02-web.jpg'
import kekkonen from '../images/kekkonen.jpg'
import mannerheim from '../images/mannerheim.jpg'
import sannamarin from '../images/marin.jpg'
import saarinen from '../images/saarinen.jpg'
import loiri from '../images/loiri.jpg'
import djlius from '../images/djlius.jpg'
//digital
import someagentti from '../images/someagentti01pieni.jpg'
import pieliseniloinen from '../images/pieliseniloinen.jpg'
import satyr01 from '../images/satyr01.jpg'
import marin from '../images/animemarin01.jpg'
import knightemoji from '../images/knightemoji01small.jpg'
import udead02 from '../images/udead02.jpg'
import koksutupa from '../images/koksutupajuliste02.jpg'
//import lifeis from '../images/lifeisvulnerablecopy.jpg'
import guybw from '../images/guybw.jpg'

const traditional = [
  
    {imageURL: sibelius02},
    {imageURL: kekkonen},
    {imageURL: mannerheim},
    {imageURL: sannamarin},
    {imageURL: saarinen},
    {imageURL: loiri},
    {imageURL: djlius},
    
]

const digital = [
    {imageURL: someagentti},
    {imageURL: pieliseniloinen},
    {imageURL: satyr01},
    {imageURL: marin},
    {imageURL: knightemoji},
    {imageURL: udead02},
    {imageURL: koksutupa},
    //{imageURL: lifeis},
    {imageURL: guybw},
    
]

const Traditional = () =>{
  return(
  <div className="container trad-container">
    <div className="album py-5 bg-light" id= "tradElement" aria-labelledby="dropdownMenu2">
      <div className="container">
        <h2 className="pb-2 border-bottom" style={{ color: 'black' }}>Traditional</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {traditional.map((image, index)=>{
          return(
            <div className="col" key={index}>
                  <ArtModal imageURL={image.imageURL} key= {index}/>
            </div>
          )
        })}
          
        </div>
      </div>
    </div>
  </div> 
  )

    
}

const Digital = () =>{
  return(
    <div className="container digi-container">
  <div className="album py-5 bg-light" id="digElement" aria-labelledby="dropdownMenu2">
    <div className="container">
      <h2 className="pb-2 border-bottom" style={{ color: 'black' }}>Digital</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {digital.map((image, index)=>{
          return(
            <div className="col" key={index}>
                  <ArtModal imageURL= {image.imageURL} key= {index}/>
            </div>
          )
        })}
      
      </div>
    </div>
  </div>
</div>
  )
}

export {Traditional, Digital};