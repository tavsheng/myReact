import React from 'react';
import s from './Navbar.module.css';
const Navbar = () => {
return (
<div className= {s.nav}>
  <div><a>Profile</a></div>
  <div><a>Messages</a></div>
  <div><a>Music</a></div>
  <div><a>Friends</a></div>
  <div><a>Settings</a></div>
</div>
);
}



export default Navbar;
