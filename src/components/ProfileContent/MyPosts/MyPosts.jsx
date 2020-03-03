import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
    {message: "Hello maaaan , how do you do?", like: "15" },
    {message: "I want tell yuo what", like: "20" },
    {message: "what", like: "0" },
    {message: "yot", like: "2" },
    {message: "I want ", like: "1" }
]

let postsElement = posts.map(p => <Post message={p.message} like={p.like} />)

const MyPosts = () => {
  return (
    <div className={s.posts}>
        { postsElement }
      {/*<Post message="Hello maaaan , how do you do?" like="15"/>
      <Post message="I want tell yuo what" like="20"/>*/}
    </div>
  )
}


export default MyPosts;