import React from "react";
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsersDuFu([
            {
                id: 1,
                photoUrl: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                followed: true,
                fullName: 'Noel R.',
                status: "I am a Noel! Hello!",
                location: {city: 'Mopti', country: 'Mali'}
            },
            {
                id: 2,
                photoUrl: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                followed: true,
                fullName: 'Noel F.',
                status: "I am a Noel Too! Hello!",
                location: {city: 'Bamako', country: 'Mali'}
            },
            {
                id: 3,
                photoUrl: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                followed: true,
                fullName: 'Ivan S.',
                status: "Hello! I'm from SPb",
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: "https://icons-for-free.com/iconfiles/png/512/business+face+people+icon-1320086457520622872.png",
                followed: false,
                fullName: 'Fedor G.',
                status: "Where I'm?",
                location: {city: 'Unknown', country: 'Unknown'}
            }
        ])
    }

    return <div>
        {
            props.users.map(user =>
                <div key={user.id} className={styles.item_wrapper}>
                <span>
                    <div>
                        <img src="" alt="" className={styles.pic}/>
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
                        <div> <img src={user.photoUrl} alt="sleep sugar"/>
                            </div>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                         <div>{user.location.city}</div>
                    </span>
                </span>

                </div>)
        }
    </div>
}

export default Users;