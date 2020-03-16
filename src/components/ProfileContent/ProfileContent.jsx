import React from 'react';
import './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";




const ProfileContent = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts.postsData} addPost={props.addPost}/>
    </div>
}


export default ProfileContent;