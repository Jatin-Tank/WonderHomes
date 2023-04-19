import React, { useState } from 'react'
import classes from './Hero.module.css'
const Hero = () => {
  const [type,setType]=useState("Beach")
  const [continent,setContinent]=useState("Europe");
  const [price,setPrice]=useState("0-10lakh")
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find your dream place right now</h2>
        <div className={classes.heading}>
          <h5>Select the best </h5> 
          <h5> Luxary Real Estate</h5>
        </div>
        <div className={classes.option}>

          <select onChange={(e)=>setType(e.target.value)}>
            <option disabled>Select type</option>
            <option value="Beach">Beach</option>
            <option value="Mountain">Mountain</option>
            <option value="City">City</option>
          </select>

          <select onChange={(e)=>setPrice(e.target.value)}>
            <option disabled>Select Price Range</option>
            <option value="0">0-10lakh</option>
            <option value="1">10lakh-50lakh</option>
            <option value="2">50lakh-1crore</option>
            <option value="3">1crore-5crore</option>
            <option value="4">5crore-10crore</option>
          </select>

          <select onChange={(e)=>setContinent(e.target.value)}>
            <option disabled>Select Continent</option>
            <option value="0">Europe</option>
            <option value="1">Asia</option>
            <option value="2">Africa</option>
            <option value="3">South America</option>
            <option value="4">North America</option>
            <option value="5">Ocenia</option>
          </select>

        </div>
      </div>
    </div>
  )
}

export default Hero