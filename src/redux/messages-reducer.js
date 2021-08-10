const UPDATE_NEW_POST_DIALOG = 'UPDATE-NEW-POST-DIALOG';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messageReducer = (state, action) => {
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