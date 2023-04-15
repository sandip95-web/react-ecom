import React from 'react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
<footer id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6 footer-contact">
        <h3>Tempo</h3>
        <p>
          Jawalakhel, Lalitpur <br/>

          <strong>Phone:</strong> +977 9841480487<br/>
          <strong>Email:</strong> sandipmaharjan95@gmail.com<br/>
        </p>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <NavLink to="/">Home</NavLink></li>
          <li><i className="bx bx-chevron-right"></i> <NavLink to="/about">About us</NavLink></li>
          <li><i className="bx bx-chevron-right"></i> <NavLink to="/contact">Contact</NavLink></li>
          <li><i className="bx bx-chevron-right"></i> <NavLink to="/product">Product</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-3 col-md-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bx bx-chevron-right"></i> <NavLink href="#">Super Fast and Free Delivery</NavLink></li>
          <li><i className="bx bx-chevron-right"></i> <NavLink href="#">Non-Contact Shipping</NavLink></li>
        </ul>
      </div>

      {/* <div className="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email" /><input type="submit" value="Subscribe" />
        </form>
      </div> */}

    </div>
  </div>
</div>

<div className="container d-md-flex py-4">

  <div className="me-md-auto text-center text-md-start">
    <div className="copyright">
      &copy; Copyright <strong><span>eshop</span></strong>. All Rights Reserved
    </div>
    <div className="credits">
      Designed by <strong>B2S</strong>
    </div>
  </div>
  <div className="social-links text-center text-md-right pt-3 pt-md-0">
    <a href="https://twitter.com/" target='_blank'  className="twitter"><i className="bx bxl-twitter"></i></a>
    <a href="https://fb.com/" target='_blank' className="facebook"><i className="bx bxl-facebook"></i></a>
    <a href="https://instagram.com/" target='_blank' className="instagram"><i className="bx bxl-instagram"></i></a>
  </div>
</div>
</footer>
    
    </>
  )
}

export default Footer