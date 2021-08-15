import React from "react";
import styles from './users.module.css'
// import * as axios from "axios";
import axios from "axios";
import userPhoto from '../../assets/images/ava.png'


class Users extends React.Component {

    //это можно удалить, по дефолту это реакт и так ставит, если нет другой добавочной логики.
    constructor(props) {
        super(props);
    }

    //мы тут оращаемся к методу жизненного цикла React
    // componentDidMount, при котором компонента выполнила свое "чистое" предназначение и отрисовалась в DOM
    componentDidMount() {
        alert("NEW");
        //делаем запрос на эндпоинт по юрл
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsersDuFu(response.data.items)
        })
    }


    render() {
        return <div>

            {
                this.props.users.map(user =>
                    <div key={user.id} className={styles.item_wrapper}>
                <span>
                    <div>
                        <img src={user.photos} alt="" className={styles.pic}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollowDumFun(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.followDumFun(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                        <span>
                    <span>
                        <div> <img src={user.photos.small != null ? user.photos.small : userPhoto } alt="user"/>
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

        </div>
    }
}

export default Users;