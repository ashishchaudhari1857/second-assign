import classes from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { useState } from 'react';
function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMobileMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className={classes.header}>
      <h2>logo</h2>
      <div className={classes.menu}>
        {toggle ? (
          <AiOutlineClose onClick={toggleMobileMenu}></AiOutlineClose>
        ) : (
          <GiHamburgerMenu onClick={toggleMobileMenu}></GiHamburgerMenu>
        )}
      </div>
      <ul className={classes.itemlist}>
        <li>Home</li>
        <li>About Us</li>
        <li>Our Block</li>
        <li>Support</li>
        <li>Affilate</li>
        <li>Program</li>
      </ul>
      
        <ul className={classes.mobileview} 
        style={{ left:toggle ? '0%' : '-100%'} }> 
          <li>Home</li>
          <li>About Us</li>
          <li>Our Block</li>
          <li>Support</li>
          <li>Affilate</li>
          <li>Program</li>
        </ul>
   
      <div className={classes.profile}>
        <button> <FiLogOut></FiLogOut>  Clocked-In</button>
        <IoIosNotificationsOutline  className={classes.icon}></IoIosNotificationsOutline>
        <AiOutlineQuestionCircle   className={classes.icon}></AiOutlineQuestionCircle>
        <div className={classes.user}>MA</div>
        <div>Account</div>
      </div>
    </header>
  );
}

export default Header;
