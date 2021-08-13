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
    dialog: 'D',
    idCount: 4
};



//dispatch   Это и есть логика dispatch
const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_DIALOG:
            return {...state,
                dialog: action.body
            }
        //    в данном случае даже не создавали переменную stateCopy, чтобы ее вернуть,
        //    а просто сразу вернули нужную анонимную копию state с изменениями

        case SEND_MESSAGE:
            let stateCopy = {...state,
                messagesData: [...state.messagesData, {id: state.idCount+1, message: state.dialog}],
                idCount: state.idCount+1,
                dialog: ''
            };
            return stateCopy;
            // мы выше и скопировали и через запятую сразу вписали в копию массива новый объект в фигурных скобках
            //и вообще внесли кучу нового в сам момент копирования,
            //ВАЖНО! Если мы хотим добавить в начало массива, то
            // messagesData: [{id: state.idCount+1, message: state.dialog}, ...state.messagesData]

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