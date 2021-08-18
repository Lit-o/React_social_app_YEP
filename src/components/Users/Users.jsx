import styles from "./users.module.css";
import userPhoto from "../../assets/images/ava.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    //Math.ceil(4.2) => 5 делит и округляет в целое большее число
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount && i <= 11; i++) {
        pages.push(i);
    }

    return (
    <div>
        <div>
            {pages.map(p => {
                //если currentPage === p тогда класс selectedPage приклеится к className
                return <span className={p === props.currentPage && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPagenationClick(p)
                             }}>{p}</span>
            })}
        </div>

        {
            props.users.map(user =>
                <div key={user.id} className={styles.item_wrapper}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" className={styles.userImg}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                    //запрос делает не анонимным, а с привязкой кук
                                    withCredentials:true,
                                    headers: {
                                      "API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"
                                    }
                                } ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollowDumFun(user.id)
                                    }
                                })
                            }}>Unfollow</button>

                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                    withCredentials:true,
                                    headers: {
                                        "API-KEY": "9285cb5d-665e-4f8d-85e6-158b43aed29d"
                                    }
                                } ).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.followDumFun(user.id)
                                    }
                                })
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>
                            {'user.location.country'}
                        </div>
                         <div>
                             {'user.location.city'}
                         </div>
                    </span>
                </span>


                </div>)
        }
    </div>)
}



export default Users;