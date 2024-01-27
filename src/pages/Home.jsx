import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Cover from '../components/Cover'
import AboutUs from '../components/AboutUs'
import OurApproach from '../components/OurApproach'

const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <Cover/>
      <AboutUs/>
      <OurApproach/>
    </div>
  )
}

export default Home
