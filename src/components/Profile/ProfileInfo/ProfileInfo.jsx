import s from './ProfileInfo.module.css';
import React from "react";

function ProfileInfo() {
    return (
        <div>
            <div className={s.main_mood}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt='ocean'/>
            </div>
            <div className={s.profile_info}>
                <div className={s.profile_ava_cont}>
                    <img
                        src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'
                        alt='rocks'/>
                </div>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;