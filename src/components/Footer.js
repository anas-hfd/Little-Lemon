import React from "react";
import Logo from "../images/Logo .svg";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
  <footer>
    <section>
      <div className="company-info">
        <img src={Logo} alt="logo" />
        <h6>© 2024 Foodies. All Rights Reserved.</h6>
        <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
      </div>

      <div>
        <h3>Important Links</h3>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/'>About Us</a></li>
          <li><a href='/'>Menu</a></li>
          <li><a href='/'>Reservations</a></li>
          <li><a href='/'>Order Online</a></li>
          <li><a href='/'>Login</a></li>
        </ul>
      </div>

      <div>
        <h3>Contact</h3>
        <ul>
          <li>Adress: <br></br> 45 Gold street, Chicago, USA</li>
          <li>Phone: <br></br> +101 256 325 145</li>
          <li>Email: <br></br> little.lemon@restaurant.com</li>
        </ul>
      </div>

      <div>
        <h3>Social media links</h3>
        <ul>
            <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> Facebook
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> Instagram
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> Twitter
                </a>
            </li>
            <li>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                    <FaPinterest /> Pinterest
                </a>
            </li>
        </ul>
      </div>
    </section>
  </footer>
    );
};

export default Footer;