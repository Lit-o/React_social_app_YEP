//создаем экшон криейторы(action creators), интерфейсы, action в правильном строгом формате, которые
// будем вызывать на контактах UI и забирать в них данные
// сами криейторы экспортируем отсюда и будем импортировать на UI, здесь они только
// описаны. Вызываться они будут в момент взаимодействия, то есть это коллбеки
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

//создаем дефолт данные до первых реальных данных
let initialState = {
    postsData: [
        {id: 1, message: "Hi, how are you, my darling Props?", likesCount: 23},
        {id: 2, message: "Hi, i'm fine", likesCount: 36},
        {id: 3, message: "I'm fine, thx and u?", likesCount: 11},
        {id: 4, message: "o la la", likesCount: 55}
    ],
    letterL: 'Da',
    profile: null
};


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
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})


// Описываем работу profileReducer (Он же и есть диспатч этого файла).
// Он запустится на конце
// интерфейса в UI, когда там его вызовут с помощью .dispatch
// После вызова там методом .dispatch там же запустятся экшон
// криейторы и создадут объекты action addPostActionCreator c типом ADD_POST
// или addLettersActionCreator с типом UPDATE_NEW_POST_TEXT
// и данными letters в свойстве text, к которому мы
// описали обращение ниже.
//
// В итоге описанный тут диспатч вызванный на конце
// UI отрабатывает и всегда возвращает state
// при этом экспортируется в redux-store и записывается там,
// меняя данные объекта reducers в свойстве profilePage(это свойство мы
// придумали сами, и оно должно намекать на компонент, в котором используется)


// В messageReducer все зарефакторино и более сжато написано,
// вписывается все в копию в момент создания копии
// здесь оставлено громоздко для сравнения, что можно писать и так и так
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.letterL,
                likesCount: 0
            };
            // Копируем объект и все требуемые мутации делаем с копией, оригинал не трогаем
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.letterL = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.letterL = action.text;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export default profileReducer;

// Получается, что в редусере описаны дефол данные, логика и
// упаковка в state новой инфы от интерфейсов - вызывается на UI
// и оттуда сразу льет в redux-store по этим описаниям