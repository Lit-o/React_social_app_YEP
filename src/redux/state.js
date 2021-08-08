import {rerenderEntireTree} from "../render";

let state = {
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
    letter: ''
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.letter,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
}

export let addLetter = (letter) => {
    state.letter = letter;
    console.log(state.letter)
    rerenderEntireTree(state);
}

export default state;