import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
return (
<div className= {s.nav}>
  <div className= {`${s.item} ${s.active}`}>
    <NavLink to='/profile' activeClassName= {s.active}>Profile</NavLink></div>
  <div className= {s.item} >
    <NavLink to='/dialogs' activeClassName= {s.active}>Messages</NavLink></div>
  <div className= {s.item}>
    <NavLink to= '/music' activeClassName= {s.active}>Music</NavLink></div>
  <div className= {s.item}>
    <NavLink to= '/friends' activeClassName= {s.active}>Friends</NavLink></div>
  <div className= {s.item}>
    <NavLink to= '/settings' activeClassName= {s.active}>Settings</NavLink></div>
</div>
);
}



export default Navbar;
