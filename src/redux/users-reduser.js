import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 2,
    totalUsersCount: 0,
    //текущая страница
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};


//dispatch   Это и есть логика dispatch
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: state.users.map(u => u) идентична users: [...state.users] и там и там создается новый массив
                users: state.users.map(usersArrayObject => {
                    if (usersArrayObject.id === action.userId) {
                        return {...usersArrayObject, followed: true}
                        //Запятая в данном случае говорит - скопируй и создай новый
                        //объект, но в нем поменяй свойство followed на true
                    }
                    return usersArrayObject;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(usersArrayObject => {
                    if (usersArrayObject.id === action.userId) {
                        return {...usersArrayObject, followed: false}
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

        //Что ниже происходит?
        // Если - (?) происходит обработка запроса, прогрузка - action.isFetching ?,
        // то мы прогружаемый элемент записываем в массив - [...state.followingInProgress, action.userId],
        // иначе - (:) если action.isFetching не происходит,
        // то мы берем массив state.followingInProgress,
        // создаем из него новый массив методом .filter и этот новый массив
        // пропустит только те id, которые не равны action.userId,
        // то есть все id, кроме того, за которым мы в этом процессе наблюдаем
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}


// Action Creators
export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})
//currentPage тк одинаковые названия значения
// свойства и входящей переменной, то
// можно сократить и написать currentPage
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const isFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const isFollowingAC = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


// Это чистая Thunk, ее обернем и ниже создадим Thunk Creator для замыкания и выхода к данным в файле
// export const getUsersThunk = (dispatch) => {
//     if (users.length === 0) {
//         dispatch(isFetchingDF(true))
//
//         usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
//             dispatch(isFetchingDF(false));
//             dispatch(setUsersDuFu(data.items));
//             dispatch(setTotalUsersCountDF(data.totalCount));
//         });
//     }
// }

export const getUsersThunkCreator = (users, currentPage, pageSize) => {
    return (dispatch) => {
        if (users.length === 0) {
            dispatch(isFetchingAC(true))
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(isFetchingAC(false));
                dispatch(setUsersAC(data.items));
                dispatch(setCurrentPageAC(currentPage));
                dispatch(setTotalUsersCountAC(data.totalCount));
            });
        }
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(isFollowingAC(false, userId));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(isFollowingAC(true, userId))
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(isFollowingAC(false, userId));
        })
    }
}



export default usersReducer;