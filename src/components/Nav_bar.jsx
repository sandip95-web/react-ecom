import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {BsBox2Heart} from 'react-icons/bs'
import {FcAbout} from 'react-icons/fc'
import {BsPhoneFlip} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';
import { useGlobalContext } from './context';

const Nav_bar = () => {
  const {cart}=useGlobalContext()
  return (
     <> 
            <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">

      
    <NavLink to=" " href="index.html" className="logo text-decoration-none text-light"><img src="./images/logo.jpg" alt="" className="img-fluid" /> E-Shop</NavLink>

      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink to="/" className="nav-link scrollto active" href="#hero">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link scrollto" href="#about">About</NavLink></li>
          <li><NavLink to="/clothes" className="nav-link scrollto" href="#services">Product</NavLink></li>
          <li><NavLink to="/contact" className="nav-link scrollto " href="#portfolio">Contact</NavLink></li>
          <li><NavLink to="*" className="nav-link scrollto" href="#team">Log-in</NavLink></li>
          <li><NavLink to="/cart">
               <h6>
               <BsCart4 className='icon'/><Badge bg="secondary">{cart.length}</Badge>
              </h6>
              </NavLink>
          </li>
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

     </>
  )
}

export default Nav_bar