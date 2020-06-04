import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import lookingForJob from '../../../assets/images/lookingForJob.png';
import notLookingForJob from '../../../assets/images/notLookingForJob.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = (props) => { 
  if (!props.profile) {
    return <Preloader/>
  }
return (
<div className= {style.profileInfo}>
<img src='https://www.orangesmile.com/ru/foto/usa/fodder120126.jpg' />
<div className= {style.profileInfoContent}>
  <div ><img src = {props.profile.photos.large}/></div>
<div>I am {props.profile.fullName}</div>
  <div>Status: {props.profile.aboutMe} </div>
<div>Looking for a job:  <img src={props.profile.lookingForAJob != true ? notLookingForJob : lookingForJob} /></div>
  <ProfileStatusWithHooks status = {props.status} updateStatus= {props.updateStatus}/>
</div>
</div>
);
}
export default ProfileInfo;