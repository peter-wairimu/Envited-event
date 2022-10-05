import React from 'react';
import button from '../../assets/Button.png';
import './button.css';
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
        <Link to="/add_event">
            <button className='app-btn'>
                    <img className='button' src={button} alt='button'/>
            </button>
        </Link>

    </div>
  )
}

export default Button