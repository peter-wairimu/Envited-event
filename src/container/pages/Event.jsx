import React from 'react';
import date from '../../assets/Date.png';
import event from '../../assets/Event.png';
import location from '../../assets/Location.png';
// import AddEevent from '../Add_events/AddEevent';
import './event.css';
import { Link } from "react-router-dom";


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
        <div className="button-home">
        <Link to="/home">
            <button className='app-btn custom-button'>
            back home
            </button>
        </Link>
        </div>

    </div>
  )
}

export default Event