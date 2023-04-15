import React from 'react'
import {NavLink} from 'react-router-dom'
const About = () => {
  return (
    <>
    <section id="hero">
    <div className="hero-container">
      <h3>Welcome to <strong>E-commerce</strong></h3>
      <h1>It is more than just sales.</h1><br />
      <h2>Looking for a hassle-free shopping experience from the comfort of your own home? Look no further than our e-shop! With a wide variety of products and easy navigation, you're sure to find what you're looking for. Plus, our secure checkout and speedy delivery ensure a stress-free shopping experience every time.</h2>
      <NavLink to="/product" className="btn-get-started scrollto">Shop Now</NavLink>
    </div>
  </section>
    </>
  )
}

export default About