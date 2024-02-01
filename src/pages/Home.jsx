import React from 'react'
import '../styles/Home.css'
import Cover from '../components/Cover'
import AboutUs from '../components/AboutUs'
import OurApproach from '../components/OurApproach'
import ServicesHome from '../components/ServicesHome'
import Connect from '../components/Connect'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className=''>
      <Cover/>
      <AboutUs/>
      <OurApproach/>
      <ServicesHome/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default Home
