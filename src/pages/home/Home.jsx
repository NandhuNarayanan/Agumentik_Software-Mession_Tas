import React from 'react'
import './home.css'
import NavBar from '../../components/navbar/NavBar'
import Banner from '../../components/banner/Banner'
import Packege from '../../components/packege/Packege'
import Island from '../../components/island/Island'

function Home() {
  return (
    <>
    <div className='main-content'>
    <div className='main-home'>
      <div className="navbar">
        <NavBar/>
      </div>
      <div className="banner">
        <Banner/>
      </div>
      <div className="packege">
        <Packege/>
      </div>
      <div className="island">
        <Island/>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home