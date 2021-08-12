import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

//Не используется, оставлен для ориентирования по store
let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you, my darling Props?", likesCount: 23},
                {id: 2, message: "Hi, i'm fine", likesCount: 36},
                {id: 3, message: "I'm fine, thx and u?", likesCount: 11},
                {id: 4, message: "o la la", likesCount: 55}
            ],
            letterL: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'Lit_o'},
                {id: 2, name: 'Dude'},
                {id: 3, name: 'SpiderMan'},
                {id: 4, name: 'SpiderLady'}
            ],
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your hommies?43'},
                {id: 3, message: "I'm fine, thx and u?"},
                {id: 4, message: "I'm fine, thx and Yo?"}
            ],
            dialog: 'D',
        },
        sideBar: {
            friendsHot: ['Jhon', 'Jackie Chan', 'Fiona']
        }
    },

    getState() {
        return this._state;
    },

    //ререндер через observer из index.js
    subscribe(observer) {
        this._callSubsriber = observer;
        // Это паттерн observer похож на publisher-subscriber addEventListener
    },

    // сюда мы присвоим то, что придет в observer, тк, в const subscribe rerenderEntireTree не определен
    // и функция начнет искать объявленную переменную глобально в файле, но не в других функциях
    // она найдет let rerenderEntireTree и присвоет ему observer вместо console

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubsriber(this._state);
    }
}

export default store;
window.store = store;