import React from 'react'
import './booking_Flight.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {RiSendPlaneFill} from 'react-icons/ri'

function Booking_Flight() {
  return (
    <>
      <div className="main-container">
        <div className="booking-header">
        <h4>Where are you flying?</h4> 
        </div>
          <div className="travel-details">
            <div className="input-group">
            <input type="text" placeholder='Lahore - Karachi' className='input'name='input'/>
            <label htmlFor="input" className='input-label'>From-To</label>
            <input type="text" placeholder='Return'  className='trip' name='trip'/>
            <label htmlFor="trip" className='trip-label'>Trip</label>
            <input type="text" placeholder='07 Nov 22 - 13 Nov 22' className='depart'/>
            <label htmlFor="depart" className='depart-label'>Depart-Return</label>
            <input type="text" placeholder='1 Passenger, Economy' className='passenger'/>
            <label htmlFor="passenger" className='passenger-label'>Passenger-Class</label>
          </div>
          <div className="booking-button">
            <div className="premo-card">
              <span>
                <AiOutlinePlus/>
                Add Promo Code
                </span>
            </div>
            <div className="show-flight">
              <span>
              <RiSendPlaneFill/>
                Show Filghts
                </span>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Booking_Flight