import React from 'react';
import s from './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const ProfileContent = () => {
    return <div>
        <ProfileInfo />
        <MyPosts />
    </div>
}


export default ProfileContent;