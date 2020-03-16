import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>)

    let newPost = React.createRef();

    let addPost = () => {
        let result = newPost.current.value;
        props.addPost(result);
        newPost.current.value = ' ';
    }
    return (
        <div className={s.posts}>
            <div>
                <input ref={newPost} type="text"/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    )
}


export default MyPosts;