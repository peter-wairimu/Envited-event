import React from 'react'
import date from '../../assets/Date.png';
import event from '../../assets/Event.png';
import location from '../../assets/Location.png';
import './event.css';


const Event = () => {
  return (
    <div className='app-event container'>
        
        <div className='event-header'>
            <h1>Birthday Bash</h1>
            <p> Hosted by <span>John Doe</span></p>

            <img className='date' src={date} alt='date' /> <br /> <br />
            <img className='location' src={location} alt='event' />

        </div>
        <div className='event-body'>
            <img className='event' src={event} alt='event' />
        </div>

    </div>
  )
}

export default Event