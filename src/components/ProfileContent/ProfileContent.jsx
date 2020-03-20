import React from 'react';
import './ProfileContent.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state from "../../redax/state";




const ProfileContent = (props) => {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts.postsData} addPost={props.addPost} newPosts={props.posts.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
}


export default ProfileContent;