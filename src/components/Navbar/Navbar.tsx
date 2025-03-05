import React from 'react';
import './Navbar.css';
import beTalent from '../../assets/images/BeTalent.png';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={beTalent} alt="" />
      </div>
    </div>
  );
};

export default Navbar;