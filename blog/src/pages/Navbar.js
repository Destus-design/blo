import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Pages.css';
import Scrollbtn from '../components/Scrollbtn.js'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar position-sticky'>
        <div className='navbar-container'>
          <div className="w-10 float-left">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            WELEAD
            <i class='fab fa-typo3' />
          </Link>
          </div>
          <div className="float-right w-70">
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
           <div className="position-absolute right-0" style={{marginTop: "90px"}}>
               <Scrollbtn />
           </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/news'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               News
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/fashion'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Fashion
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/health'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Health
              </Link>
            </li><li className='nav-item'>
              <Link
                to='/love'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Love
              </Link>
            </li><li className='nav-item'>
              <Link
                to='/lifestyle'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Lifestyle
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sports'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sports
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          </div>
          <Link to='/sign-up' className="Button btn btn-default">
          {button && <Button className='btn--outline' type="button" >SIGN UP</Button>}
          </Link>
        </div>
        <div className="">
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;