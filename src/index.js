import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redax/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redax/state'

export let renderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />,
        document.getElementById('root'));
}

renderTree(state);

subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

