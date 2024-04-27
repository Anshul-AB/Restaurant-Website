import React from "react";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
      <div className="contactInfo">
        <h3>Contact Info</h3>
        <p>
          <b>Address:</b> House No. 223, Block- 4C, Madrin Street, Chicago
        </p>
        <p>
          <b>Phone No. : </b>345-675-876
        </p>
        <p>
          <b>Email:</b>
          <a href="#"> littleLemon@hotmail.com</a>
        </p>
      </div>
      <div className="socialLinks">
        <h3>Connect with Me</h3>
        <a href="#">
          {" "}
          <FaWhatsapp size={32} style={{ marginRight: "10px" }} />
        </a>
        <a href="#">
          {" "}
          <FaTwitter size={32} style={{ marginRight: "10px" }} />
        </a>
        <a href="#">
          {" "}
          <FaInstagram size={32} style={{ marginRight: "10px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
