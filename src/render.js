import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost} from './redux/state'
import {addLetter} from "./redux/state";

// addPost();
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} addLetter={addLetter}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}

