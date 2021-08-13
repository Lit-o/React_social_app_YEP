import {connect} from "react-redux";
import {followAC, unfollowAC, setUsersAC} from "../../redux/users-reduser";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);