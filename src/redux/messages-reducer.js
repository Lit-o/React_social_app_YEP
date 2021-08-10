const UPDATE_NEW_POST_DIALOG = 'UPDATE-NEW-POST-DIALOG';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    dialog: 'D'
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_DIALOG:
            state.dialog = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.dialog
            state.dialog = '';
            state.messagesData.push({id: 5, message: body})
            return state;
        default:
            return state;
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


export default messageReducer;