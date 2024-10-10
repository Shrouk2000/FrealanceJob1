import React from 'react';
import './Header.css'; 
import profileImage from '../../images/image.jpg';

const Header = () => {
    return (
        <header className="cv-header">
            <div className="header-info">
                <h1 className="name">Adel Omar Mahmoud</h1>
                <h2 className="title">Chief Surveyor</h2>
                <p className="location">Sixth of October, Giza, Egypt</p>
                <p className="contact-info">
                    <span>+20-1097550665</span> | 
                    <span>adelomar1001@gmail.com</span> | 
                    <a href="https://linkedin.com/in/adel-omar1" target="_blank" rel="noopener noreferrer">linkedin.com/in/adel-omar1</a>
                </p>
            </div>
            <img src={profileImage} alt="Adel Omar Mahmoud" className="profile-image" />
        </header>
    );
};

export default Header;
