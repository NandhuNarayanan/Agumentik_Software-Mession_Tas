import React from 'react'
import './banner.css'
import { MdExplore } from 'react-icons/md'
import Map from '../../assets/image/map-3.png'
import Layer from '../../assets/image/Layer 1.png'
import { MdFlight } from 'react-icons/md'
import {IoTrainSharp} from 'react-icons/io5'
import {IoLocationSharp} from 'react-icons/io5'
import Resort from '../../assets/image/resort.jpeg'
import Hill from '../../assets/image/hill.jpeg'
import Booking_Flight from '../find-flight/Booking_Flight'
import Packege from '../packege/Packege'



function Banner() {
  return (
    <>
      <div className="main-banner">
        <div className="text-area">
          <div className="heading">
            <div className="visit">
              <div className="visit-text">
                <span>Visit</span>
              </div>
              <div className="visit-icon">
                <MdExplore />
              </div>
            </div>
            <div className="head-text">
              <h1>
                The Exotic{' '}
                <span style={{ color: 'rgba(50, 130, 173, 1)' }}>
                  Lakshadweep
                </span>{' '}
                Islands
              </h1>
            </div>
            <div className="discover-btn">
              <span>Discover Now</span>
            </div>
          </div>
        </div>
        <div className="parant-image">
          <div className="ellipse3"></div>
          <div className="image-area">
            <img className="map" src={Map} alt="" />
          </div>
          <div className="circle1">
            <div className="ellipse1"></div>
            <div className="ellipse2"></div>
            <div className="circle2">
              <div className="circle3">
                <div className="image-layer">
                  <img src={Layer} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flight-frame">
            <MdFlight className='flight'/>
            Jakarta - Bali
            </div>
            <div className="train-frame">
                <IoTrainSharp style={{fontSize:'25px' , color:'#42A8C3'}}/>
            </div>
            <div className="card">
              <div className="card-sqr">
              <img src={Resort} alt="Resort" />
              <div className='content'>
              <span>Le Pirate Hotel</span>
                <div className='location'>
                  <IoLocationSharp style={{ color:'#42A8C3' }}/>
                  Flores, Indonesia
                  </div>
              </div>
            </div>
            </div>

            <div className="card2">
            <div className="card2-sqr2">
              <img src={Hill} alt="Hill" />
              <div className='content2'>
              <span>Explore Labuan Bajo</span>
                <div className='location2'>
                  <IoLocationSharp style={{ color:'#42A8C3' }}/>
                  NTT, Indonesua
                  </div>
              </div>
            </div>
            </div>
        </div>
        <div>
          <Booking_Flight/>
        </div>
      </div>
    </>
  )
}

export default Banner
