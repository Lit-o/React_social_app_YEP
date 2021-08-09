const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_DIALOG = 'UPDATE-NEW-POST-DIALOG';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    getState () {
        return this._state;
    },

    //ререндер через observer из index.js
    subscribe (observer) {
        this._callSubsriber = observer;
        // Это паттерн observer похож на publisher-subscriber addEventListener
    },
    _callSubsriber () {
        console.log('state changed')
    },
    // сюда мы присвоим то, что придет в observer, тк, в const subscribe rerenderEntireTree не определен
// и функция начнет искать объявленную переменную глобально в файле, но не в других функциях
// она найдет let rerenderEntireTree и присвоет ему observer вместо console



    dispatch(action) {
        // action объект - { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.letterL,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.letterL = '';
            this._callSubsriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.letterL = action.text;
            this._callSubsriber(this._state);

        //    Dialogs methods
        } else if (action.type === UPDATE_NEW_POST_DIALOG) {
            this._state.messagesPage.dialog = action.body;
            this._callSubsriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.dialog
            this._state.messagesPage.dialog = '';
            this._state.messagesPage.messagesData.push({id: 5, message: body})
            this._callSubsriber(this._state);
        }
    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const addLettersActionCreator = (letters) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: letters
    }
}



export const addPostDialogCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const addLettersDialogCreator = (body) => {
    return {
        type: UPDATE_NEW_POST_DIALOG,
        body: body
    }
}





export default store;
window.store = store;