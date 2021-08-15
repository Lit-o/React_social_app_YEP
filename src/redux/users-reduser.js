const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: []
};



//dispatch   Это и есть логика dispatch
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: state.users.map(u => u) идентична users: [...state.users] и там и там создается новый массив
                users: state.users.map( usersArrayObject => {
                    if (usersArrayObject.id === action.userId) {
                        return {...usersArrayObject, followed:true}
                                                //Запятая в данном случае говорит - скопируй и создай новый
                                                //объект, но в нем поменяй свойство followed на true
                    }
                    return usersArrayObject;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( usersArrayObject => {
                    if (usersArrayObject.id === action.userId) {
                        return {...usersArrayObject, followed:false}
                    }
                    return usersArrayObject;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
            //    мы копируем стейт поверхностно, потом поглубже копируем users
            //    и в нем говорим, старые state.users, добавьтесь новыми action.users
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})



export default usersReducer;