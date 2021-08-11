import s from './Profile.module.css';
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={s.profile_info}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;