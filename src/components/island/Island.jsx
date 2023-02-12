import React from 'react'
import './island.css'
import { AiFillStar } from 'react-icons/ai'
import Kavarathi from '../../assets/image/kavarathi1.png'
import Kavarathi2 from '../../assets/image/kavarathi2.png'
import Kavarathi3 from '../../assets/image/kavarathi3.png'
import Kavarathi4 from '../../assets/image/kavarathi4.png'
import Kavarathi5 from '../../assets/image/kavarathi5.png'
import Kavarathi6 from '../../assets/image/kavarathi6.png'
import Map from '../../assets/image/wolrd-map.png'

function Island() {
  const data = [
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi,
    },
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi2,
    },
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi3,
    },
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi4,
    },
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi5,
    },
    {
      islandname: 'Kavaratti',
      islandContent:
        'Kavaratti is the capital of the Union Territory of Lakshadweep having ...',
      rating: '4.5(1.5k Review)',
      image: Kavarathi6,
    },
  ]

  return (
    <>
      <div className="island-main">
        <div className="island-header">
          <h2>Island Stays</h2>
          <p>
            One can choose from a variety of beautiful coral islands which
            offers different staying experiences from thatched huts to luxurious
            modern properties. Every island offers a wider range of water sports
            and beach activities for you to enjoy.
          </p>
        </div>
        <div className="island-card">
          <div className="island-frame1">
            {data.map((datas) => {
              return (
                <div className="cards">
                  <img src={datas.image} alt="Kavarathi" />
                  <div className="island-content">
                    <div className="head-name">
                      <h2>{datas.islandname}</h2>
                    </div>
                    <div className="head-content">
                      <p>{datas.islandContent}</p>
                    </div>
                    <div className="rating-island">
                      <div className="island-star">
                        <span>
                          <AiFillStar style={{ color: '#42A8C3' }} />
                          {datas.rating}
                        </span>
                      </div>
                      <div className="explore">
                        <span>Explore More</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="contact-area">
          <div className="frame-content">
            <img src={Map} alt="Map" />
            <h3>Let’s Ready to Explore The World With Us.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue.{' '}
            </p>
            <div className="contact_us-area">
              <div className="contact-box">
                <span>Contact Us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Island
