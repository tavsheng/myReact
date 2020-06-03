import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render= {withSuspense (ProfileContainer)} />
          <Route path='/dialogs'
            render={ withSuspense (DialogsContainer)} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/friends' render={() => <Friends />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/login' render={() => <Login />} />
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
initialized: state.app.initialized
})

export default compose(
  withRouter,
   connect (mapStateToProps, {initializeApp})) (App);
