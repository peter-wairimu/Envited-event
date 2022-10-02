import React from 'react'
import './header.css'
import movie from '../../assets/image.png';
import Button from '../Button/Button';
import heading from '../../assets/Heading.png';
import txt from '../../assets/txt.png';




const Header = () => {
  return (
    <div className='app-header container'>
        <div className='app-header__logo'>
            <img src={movie} alt='logo' />
            </div>
            <div className='app-header__title'>
            <img className='head' src={heading} alt='snap' />

            <img className='text' src={txt} alt='snap' />

            <Button />
            </div>

    </div>
  )
}

export default Header