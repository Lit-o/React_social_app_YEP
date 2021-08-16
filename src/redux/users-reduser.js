const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


let initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    //текущая страница
    currentPage: 1,
    isFetching: false
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
            return {...state, users: [...action.users]}

            // return {...state, users: [...state.users, ...action.users]}
            //    мы копируем стейт поверхностно, потом поглубже копируем users
            //    и в нем говорим, старые state.users, добавьтесь новыми action.users
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT : {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
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
                                                                        //currentPage тк одинаковые названия значения
                                                                        // свойства и входящей переменной, то
                                                                        // можно сократить и написать currentPage
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const isFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer;