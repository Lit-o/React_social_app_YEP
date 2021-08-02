import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

    let postsData = [
        {id: 1, message: "Hi, how are you, my darling Props?", likesCount: 23},
        {id: 2, message: "Hi, i'm fine", likesCount: 36},
        {id: 3, message: "I'm fine, thx and u?", likesCount: 11},
        {id: 4, message: "o la la", likesCount: 55}
    ];

    let dialogsData = [
        {id: 1, name: 'Lit_o'},
        {id: 2, name: 'Dude'},
        {id: 3, name: 'SpiderMan'},
        {id: 4, name: 'SpiderLady'}
    ];
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your hommies?'},
        {id: 3, message: "I'm fine, thx and u?"},
        {id: 4, message: "I'm fine, thx and Yo?"}
    ];



ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

