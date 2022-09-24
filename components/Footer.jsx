import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JUNRO All rights reserved</p>

      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <FaLinkedin />
        <AiFillGithub />
      </p>
      <div className="footerText">
        <p>
          Do you have any questions?
          <br></br>
          <div className="footerLink">
            <Link href="../contact">
              Contact Us
            </Link>
          </div>
        </p>
        <p>
          Want to learn more about JUNRO?
          <br></br>
          <div className="footerLink">
            <Link href="../aboutus">
              About Us
            </Link>
          </div>
        </p>
      </div>
    </div>
  )
}

export default Footer