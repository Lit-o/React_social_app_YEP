const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.letterL,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.letterL = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.letterL = action.text;
            return state;
        default:
            return state;
    }
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


export default profileReducer;