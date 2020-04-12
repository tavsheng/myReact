import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
return (
<div className= 'app-wraper'>
  <Header className= 'header'/>
  <Navbar className= 'nav'/>
  <Profile className= 'content'/>
</div>
);
}



export default App;
