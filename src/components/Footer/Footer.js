import React from 'react';
import './Footer.css'; // Importing CSS for Footer
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Corrected import

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h4>Edzest Education Services Pvt Ltd</h4>
                    <p>Harlaur Road, Bengaluru, India</p>
                    <p>Email: contact@edzest.org</p>
                    <p>Phone: 6299119033</p>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter /> Twitter
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram /> Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
