import {combineReducers, createStore} from "redux";
// импортируем все reducers проекта,
// то есть все логики обработки интерфейсов компонент
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";

// redux магией combineReducers сшиваем все логики в один объект
// свойства типа profilePage и тд мы будем использовать в контейнерных компонентах для приготовления пропсов,
// а значения мы берем из файлов Х-reducer export default nameReducer
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

// redux магией createStore со сшитых логик reducers создаем новый store
let store = createStore(reducers);

window.store = store;
// можно это расскоментить и в консоле в гугле прописать store.getState() для отладки

export default store;