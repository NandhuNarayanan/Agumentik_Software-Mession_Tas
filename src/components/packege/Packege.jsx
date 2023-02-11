import React from 'react'
import './packege.css'
import Flightline from '../../assets/image/vector-99.svg'
import Kayaking from '../../assets/image/kayakingimage1.png'
import Ship from '../../assets/image/Shipimg.png'
import Boat from '../../assets/image/boatimg.png'
import {IoLocationOutline} from 'react-icons/io5'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

function Packege() {
  return (
    <>
      <div className="packege-main">
        <div className="layer">
          <img src={Flightline} alt="Flightline" />
        </div>
        <div className="packege-heading">
          <h1>Best Packages For You</h1>
          <p>
            This is a unique experience on ship, sea and land, exploring
            different coral islands of Lakshadweep.
          </p>
        </div>
        <div className="frame-pack">
          <div className="frame1">
            <span>Maldives</span>
          </div>
          <div className="frame2">
            <span>Samudram</span>
          </div>
          <div className="frame3">
            <span>Cordelia</span>
          </div>
          <div className="frame4">
            <span>Agatti</span>
          </div>
          <div className="frame5">
            <span>More</span>
          </div>
        </div>
        <div className="packege-card">
          <div className="pkg1">
            <img src={Kayaking} alt="Kayaking" />
            <div className="content-packege">
              <div className="packege-header1">
                <h4>
                    <IoLocationOutline/>
                    Indonesia
                    </h4>
                <p>
                  Explore the Beauty of the island for 3 days and 2 nights with
                  our travel agency...
                </p>
              </div>
              <div className="rating">
                <AiFillStar style={{ color:'#42A8C3' }}/>
                4.5
              </div>
              <div className="bookbutton">
                <div className="booknow">
                    <span>Book Now</span>
                </div>
            </div>
            </div>
            <div className="rs1">
                <div className='rupee1'>
                <span>
                    <BiRupee/>
                    500
                    </span>
                </div>
            </div>
           
          </div>
          <div className="pkg2">
            <img src={Ship} alt="Ship" />
            <div className="content-packege">
              <div className="packege-header2">
                <h4>
                    <IoLocationOutline/>
                    Indonesia
                    </h4>
                <p>
                  Explore the Beauty of the island for 3 days and 2 nights with
                  our travel agency...
                </p>
              </div>
              <div className="rating">
                <AiFillStar style={{ color:'#42A8C3' }}/>
                4.5
              </div>
              <div className="bookbutton">
                <div className="booknow">
                    <span>Book Now</span>
                </div>
            </div>
            </div>
            <div className="rs1">
                <div className='rupee1'>
                <span>
                <BiRupee/>
                500
                </span>
                </div>
            </div>
          
          </div>
          <div className="pkg3">
            <img src={Boat} alt="Boat" />
            <div className="content-packege">
              <div className="packege-header3">
                <h4>
                    <IoLocationOutline/>
                    Indonesia
                    </h4>
                <p>
                  Explore the Beauty of the island for 3 days and 2 nights with
                  our travel agency...
                </p>
              </div>
              <div className="rating">
                <AiFillStar style={{ color:'#42A8C3' }}/>
                4.5
              </div>
              <div className="bookbutton">
                <div className="booknow">
                    <span>Book Now</span>
                </div>
            </div>
            <div className="rs1">
                <div className='rupee1'>
                <span>
                <BiRupee />
                    500

                </span>
                </div>
            </div>
           
            </div>
          </div>
        </div>
        <div className='dots'>
            <div className="dot1"></div>
            <div className="dot2"></div>
            <div className="dot3"></div>
        </div>
        <div className="discover">
            <span>Discover More</span>
        </div>
      </div>
    </>
  )
}

export default Packege
