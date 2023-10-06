import { React, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { BsHousesFill } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineMail } from "react-icons/ai";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)"
  }
};

Modal.setAppElement('#root');


function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!isModalOpen);
  };

  function handleClick() {
    handleModal();
  }



  return (
    <div className="header-container">
      <div className='header-left'>
        <Link to="/" className='header-title'>
          <p><BsHousesFill className='header-icon' /> UniLife</p>
      </Link>
      </div>

      <div className='header-right'>
        <Link to="/shortlist" className='header-title'>
          <p> <AiOutlineHeart className='header-icon'/> Shortlist</p>
        </Link>

        <p onClick={setModalOpen} className='contact-btn'> <AiOutlineMail className='header-icon'/> Contact Us</p>

      </div>

      <Modal
          isOpen={isModalOpen}
          onRequestClose={handleModal} 
          style={customStyles}
          contentLabel='Contact Us Modal'
        >

        <div className='contact-modal-container'>
          <div className='contact-modal-header'>
            <h1>Contact Us</h1>
            <p>Feel free to contact us if you have any questions.<br />
              Looking forward to hearing from you.</p>
          </div>
                  
          <form className='contact-modal-form'>
                    
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" id="name" required/>

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email address" id="email" required/>

            <label htmlFor="phone-number">Phone Number</label>
            <input type="number" placeholder="Enter your phone number" id="phone-number" required/>

            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Enter your message" rows="4"></textarea>

            <label htmlFor='placeholder'>Are you a...</label>
            <select>
              <option value="option1">Student</option>
              <option value="option2">Other</option>
            </select>

            <button className="submit-btn" type="submit">Submit</button>

          </form>
        </div>
      </Modal>


    </div>


  )
}

export default Header