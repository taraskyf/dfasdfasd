import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} like={p.like}/>)

    let newPost = React.createRef();

    let addPost = () => {
        let result = newPost.current.value;
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let result = newPost.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: result});
    }
    return (
        <div className={s.posts}>
            <div>
                <input onChange={onPostChange} ref={newPost} type="text" value={props.newPosts}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElement}
        </div>
    )
}


export default MyPosts;