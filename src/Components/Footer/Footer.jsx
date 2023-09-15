import React from 'react'
import "./Footer.css"
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer-container'>Footer
        <div className="footer-top-banner">
          <div className="footer-left">
            <h2>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for
              our weekly newsletter and stay informed.</p>
            <input placeholder="Your email" />
          </div>

          <div className="footer-right">
            <h2>Let's Socialize</h2>

            <div className="icons">
            <BsFacebook />
            <p>Facebook</p>
            </div>

            <div className="icons">
            <AiFillTwitterCircle />
            <p>Twitter</p>
            </div>

            <div className="icons">
            <BsInstagram />
            <p>Instagram</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer