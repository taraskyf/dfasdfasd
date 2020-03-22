import React from 'react';
import './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const ProfileContent = (props) => {
    return <div>
        <ProfileInfo />
        <MyPosts posts={props.profileData.postsData} dispatch={props.dispatch} newPosts={props.posts.newPostText} />
    </div>
}


export default ProfileContent;