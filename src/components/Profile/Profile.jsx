import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile() {
    return (
        <div className={s.profile_info}>
            <ProfileInfo />

            <MyPosts/>
        </div>
    )
}

export default Profile;