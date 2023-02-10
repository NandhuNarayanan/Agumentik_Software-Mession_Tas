import React from 'react'
import './home.css'
import NavBar from '../../components/navbar/NavBar'
import Banner from '../../components/banner/Banner'

function Home() {
  return (
    <div className='main-home'>
        <NavBar/>
        <Banner/>
    </div>
  )
}

export default Home