import s from './ProfileInfo.module.css';
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

function ProfileInfo(props) {
    // презентационная компонента, которая сначала показывает прелоадер если props.profile нет
    // и потом возвращает разметку
    // if (props.profile == null || props.profile == undefined) далее сокращенная аналогичная запись
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.main_mood}>
                <img src='https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg' alt='ocean'/>
            </div>
            <div className={s.profile_info}>
                <div className={s.profile_ava_cont}>
                    <img src={props.profile.photos.large} alt="ava"/>
                    <div>
                        <p>О себе -- {props.profile.aboutMe}</p>
                    </div>
                    <div>
                        <p>Имя -- {props.profile.fullName}</p>
                    </div>
                    {/*<img*/}
                    {/*    src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg'*/}
                    {/*    alt='rocks'/>*/}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;