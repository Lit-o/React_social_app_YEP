import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users-reduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followDumFun: (userId) => {
            dispatch(followAC(userId));
        },
        unfollowDumFun: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsersDuFu: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPageDF: (current) => {
            dispatch(setCurrentPageAC(current))
        },
        setTotalUsersCountDF: (current) => {
            dispatch(setTotalUsersCountAC(current))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);