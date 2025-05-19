// src/components/Footer.jsx
import React from 'react'; // Correct path to footer.css
import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='foot'>
    <footer className="hotel-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h4 className="footer-title">Forvery One Hotel</h4>
          <p>Experience luxury and comfort with us, where every stay feels like home.</p>
        </div>
        <div className="footer-middle">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h5>Contact Us</h5>
          <p><strong>Email:</strong> ForeveryOne@hotel.com</p>
          <p><strong>Phone:</strong> +1 234 567 890</p>
          <p><strong>Address:</strong> 123 Hotel St, City, Country</p>

          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Forvery One Hotel. All Rights Reserved.</p>
      </div>
    </footer></div>
  );
}

export default Footer;
