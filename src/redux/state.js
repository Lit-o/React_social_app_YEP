let store = {
    _state: {
        letterL: '',
        profilePage: {
            postsData: [
                {id: 1, message: "Hi, how are you, my darling Props?", likesCount: 23},
                {id: 2, message: "Hi, i'm fine", likesCount: 36},
                {id: 3, message: "I'm fine, thx and u?", likesCount: 11},
                {id: 4, message: "o la la", likesCount: 55}
            ]
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
            ]
        },
        sideBar: {
            friendsHot: ['Jhon', 'Jackie Chan', 'Fiona']
        },
    },
    getState () {
        return this._state;
    },
    addPost (){
        let newPost = {
            id: 5,
            message: this._state.letterL,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.letterL = '';
        this._callSubsriber(this._state);
    },
    addLetter (letter) {
        this._state.letterL = letter;
        this._callSubsriber(this._state);
    },
    // сюда мы присвоим то, что придет в observer, тк, в const subscribe rerenderEntireTree не определен
// и функция начнет искать объявленную переменную глобально в файле, но не в других функциях
// она найдет let rerenderEntireTree и присвоет ему observer вместо console
    _callSubsriber () {
        console.log('state changed')
    },

    subscribe (observer) {
        this._callSubsriber = observer;
        // Это паттерн observer похож на publisher-subscriber addEventListener
    }
}

export default store;
window.store = store;