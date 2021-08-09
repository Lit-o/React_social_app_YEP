import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={s.profile_info}>
            <ProfileInfo />
            <MyPosts
                postsData={props.state.postsData}
                dispatch={props.dispatch}
                letterL={props.state.letterL}
            />
        </div>
    )
}

export default Profile;