import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';

const App = (props) => {
return (
 
<div className= 'app-wrapper'>
  <Header/>
  <Navbar/>  
  <div className= 'app-wrapper-content'>
  <Route path= '/profile'
   render={ () => <Profile/>}/>
  <Route path= '/dialogs'
   render={ () => <DialogsContainer/>}/>
  <Route path= '/music' render={ () => <Music/>}/>
  <Route path= '/friends' render={ () => <Friends/>}/>
  <Route path= '/settings' render={ () => <Settings/>}/>
    </div>
</div>

);
}



export default App;
