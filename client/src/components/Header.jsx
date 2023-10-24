import React, { useState } from 'react';
import Modal from 'react-modal';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import LoginModal from '../page/LoginModal';


Modal.setAppElement('#root');

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const openModal = () => {
    setIsOpen(true);
    setIsSidebarOpen(false); 
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleSide = () => {
    setIsSidebarOpen(isOpen => !isOpen);
  };

  return (
    <div className='header'>
      <div className="header-wrapper">
        <div className="right_header_info">
          <Link className="logo" to="/">
            <img src="https://blog.kakaocdn.net/dn/sOyns/btsqj4DwgGb/mKXpq55jDFKNNjxhn6uT30/img.png" alt="Logo" style={{ width: '300px' }} />
          </Link>
          <ul className="button_group">
            <li className="button_user">
              <button className="button active" onClick={openModal}>
                Login
              </button>
              <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Login Modal"
                style={{
                  content: {
                    position: 'relative',
                    top: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '550px',
                    maxHeight: '90vh',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    overflowX: 'hidden',
                  },
                  overlay: {
                    backgroundColor: 'rgba(5, 0, 2, 0.6)',
                    zIndex: 1000,
                  },
                }}
              >
                {isOpen ? <LoginModal closeModal={closeModal} /> : null}
                <button className="close-button" onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
              </Modal>
            </li>
            <li>
              <button type="button" id="sidebarCollapse" onClick={toggleSide}>
                <img src="/images/menu_icon.png" alt="#" />
              </button>
              {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}