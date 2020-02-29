import React from 'react';
import s from './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';

const ProfileContent = () => {
  return <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXwtg0W3cLpYGsWOsN2ikTjUB_ypPxDXnFOF5AvKprWgCCLmXS" />

    <div >
      ava + description
    </div>
    <MyPosts />
  </div>
}


export default ProfileContent;