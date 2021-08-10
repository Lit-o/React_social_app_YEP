import {combineReducers, createStore} from "redux";
// импортируем все reducers проекта,
// то есть все логики обработки интерфейсов компонент
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

// redux магией combineReducers сшиваем все логики в один объект
let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sideBar: sidebarReducer
})
// redux магией createStore со сшитых логик reducers создаем новый store
let store = createStore(reducers);

export default store;