import {connect} from "react-redux";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    isFetchingAC
} from "../../redux/users-reduser";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

//AJAX--GET--LOGIC--CLASS--CONTAINER--AREA--AJAX--GET--LOGIC--CLASS--CONTAINER--AREA--AJAX--GET--LOGIC--CLASS--CONTAINER

class UsersAPIComponent extends React.Component {
    //это можно удалить, по дефолту это реакт и так ставит, если нет другой добавочной логики.
    constructor(props) {
        super(props);
    }

    //мы тут оращаемся к методу жизненного цикла React
    // componentDidMount, при котором компонента выполнила свое "чистое" предназначение и отрисовалась в DOM
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.isFetchingDF(true)
            // alert("NEW");
            //делаем запрос на эндпоинт по юрл
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}` , {
                withCredentials: true
            }).then(response => {
                this.props.isFetchingDF(false)
                this.props.setUsersDuFu(response.data.items);
                this.props.setTotalUsersCountDF(response.data.totalCount)
            })
        }
    }

    onPagenationClick = (pageNumber) => {
        this.props.setCurrentPageDF(pageNumber);
        this.props.isFetchingDF(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}` , {
            withCredentials: true
        }).then(response => {
            this.props.isFetchingDF(false);
            this.props.setUsersDuFu(response.data.items)
        })
    }

    render() {
        return <>
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                {/*{this.props.isFetching ? <span>>>>DOWNLOADING DATA>>></span> : null}*/}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPagenationClick={this.onPagenationClick}
                   users={this.props.users}
                   unfollowDumFun={this.props.unfollowDumFun}
                   followDumFun={this.props.followDumFun}
            />

        </>
    }
}


//PROPS CREATE AREA---PROPS CREATE AREA---PROPS CREATE AREA---PROPS CREATE AREA---PROPS CREATE AREA---PROPS CREATE AREA

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// Зарефакторили эту запись ниже заменив mapDispatchToProps объектом с ссылками на Action Creators
// let mapDispatchToProps = (dispatch) => {
//     return {
//         followDumFun: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollowDumFun: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsersDuFu: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPageDF: (current) => {
//             dispatch(setCurrentPageAC(current))
//         },
//         setTotalUsersCountDF: (current) => {
//             dispatch(setTotalUsersCountAC(current))
//         },
//         isFetchingDF: (isFetching) => {
//             dispatch(isFetchingAC(isFetching))
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

// let name = 15;
// let user = {
//  name (так можно сократить запись name: name;)
// }
// поэтому followDumFun: followAC можно сократить до follow,
// если followDumFun назвать follow и followAC назвать follow,
// покачто я этого делать не буду, чтобы пописать где DF, AC но вообще рефактор возможен.

export default connect(mapStateToProps, {
    followDumFun: followAC,
    unfollowDumFun: unfollowAC,
    setUsersDuFu: setUsersAC,
    setCurrentPageDF: setCurrentPageAC,
    setTotalUsersCountDF: setTotalUsersCountAC,
    isFetchingDF: isFetchingAC
})(UsersAPIComponent);