import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div className={s.posts}>
      <Post message="Hello maaaan , how do you do?" like="15"/>
      <Post message="I want tell yuo what" like="20"/>
    </div>
  )
}


export default MyPosts;