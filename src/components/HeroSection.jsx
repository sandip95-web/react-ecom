import React from 'react'
import {NavLink} from 'react-router-dom'
const HeroSection = ({myData}) => {
  const {name}=myData
    return (
    <>
    
    <section id="hero">
    <div className="hero-container">
      <h3>Welcome to <strong>{name}</strong></h3>
      <h1>It is more than just sales.</h1>
      <h2>An E-commerce platform that is made to impress</h2>
      <NavLink to="/clothes" className="btn-get-started scrollto">Shop Now</NavLink>
    </div>
  </section>
    
    </>
  )
}

export default HeroSection