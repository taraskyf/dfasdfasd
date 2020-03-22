import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redax/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

export let renderTree = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />,
     document.getElementById('root'));
}

renderTree(store.getState());

store.subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

