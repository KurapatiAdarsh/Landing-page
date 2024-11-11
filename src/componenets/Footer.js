import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="text-center text-white">Contact us at: contact@vrvsecurity.com</p>
      <div className="social-icons text-center mb-4">
        <a href="#facebook" className="social-icon mx-3">
          <FaFacebook size={30} />
        </a>
        <a href="#twitter" className="social-icon mx-3">
          <FaTwitter size={30} />
        </a>
        <a href="#linkedin" className="social-icon mx-3">
          <FaLinkedin size={30} />
        </a>
      </div>
      <p className="text-center text-danger">&copy; 2024 VRV Security</p>
    </footer>
  );
}

export default Footer;
