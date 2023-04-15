import React from 'react'
import TopSection from './TopSection'
import Services from './Services'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Feature from './Feature'
const Home = () => {
  const data={
     name:'E-Shop'
  }
  return (
     <>
       <HeroSection myData={data} />
       <Services />
       <Footer/>
     </>
  )
}
  
export default Home