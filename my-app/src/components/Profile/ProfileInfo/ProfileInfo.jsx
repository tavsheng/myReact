import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => { 
return (
<div className= {s.profileInfo}>
<img src='https://www.orangesmile.com/ru/foto/usa/fodder120126.jpg' />
<div className= {s.profileInfoContent}>
  <div>Ava</div>
  <div>description</div>
</div>
</div>
);
}
export default ProfileInfo;