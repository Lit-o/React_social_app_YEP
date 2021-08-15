import styles from "./users.module.css";
import userPhoto from "../../assets/images/ava.png";
import React from "react";


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
                        <img src={user.photos} alt="" className={styles.pic}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                props.unfollowDumFun(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.followDumFun(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div> <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user" className={styles.userImg}/>
                            </div>
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