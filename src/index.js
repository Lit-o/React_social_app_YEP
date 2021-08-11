import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './App';
import store from "./redux/redux-store";


// Оглашаем главную основную функцию, которая все-все соберет и нарисует
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} store={store}
                     dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}

// Вызываем главную функцию, чтобы она
// первый раз все отрисовала и пользователь
// смог бы взаимодейстовать, в значения закидываем то,
// что соберет для нас на старте редакс
rerenderEntireTree(store.getState());

//Видимо по логике вещей метод .subscribe объекта store в redux
//позволяет отслеживать изменения store и выполнять нужную нам
//логику. При этом обновленный store нам не дает, только слушает
//обновления. Поэтому создаем newState и даем ему новые данные
//с помощью store.getState() - видимо тоже вшитый метод redux
//для получения из него данных
store.subscribe( () => {
    let newState = store.getState();
    rerenderEntireTree(newState);
} );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();