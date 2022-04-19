import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { NavItem } from 'reactstrap';

function Navbar(props) {
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

  function isLogin() {
    if (!props.user) {
      return (
        <div style={{ paddingBottom: 10 }}>
          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
            </Link>
          </li>
        </div>
      )
    }
  }
  function HandleUser() {
    if (props.user) {
      console.log(props)
      return (
        <div style={{ paddingBottom: 10 }}>
          <li className='nav-item'>
            <Link
              to='/cadastronoticia'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Criar Noticia
            </Link>
          </li>
        </div >
      )
    }
  }
  function logout() {
    function garbageLocalStorage() {
      localStorage.removeItem("token")
    }

    return (
      <div style={{ paddingBottom: 10 }}>
        <h1>b</h1>
      </div>
    )
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Instituto Pauxi Mitu
            <i className='fas fa-crow' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/cadastronoticia'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Criar Noticia
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' hrf='/cadastronoticia'>{isLogin()}Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
