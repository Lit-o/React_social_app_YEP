import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';

import App from './App';
import store from "./redux/redux-store";
import {Provider} from "react-redux";


// Оглашаем главную основную функцию, которая все-все соберет и нарисует
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    )
//Видимо по логике вещей метод .subscribe объекта store в redux
//позволяет отслеживать изменения store и выполнять нужную нам
//логику. При этом обновленный store нам не дает, только слушает
//обновления. Поэтому создаем newState и даем ему новые данные
//с помощью store.getState() - видимо тоже вшитый метод redux
//для получения из него данных
// store.subscribe(() => {
//     let newState = store.getState();
//     rerenderEntireTree(newState);
// }); Выкляючаем subscribe, тк connect делает это сам с отдельной
// компонентой, а не со всем DOM

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();