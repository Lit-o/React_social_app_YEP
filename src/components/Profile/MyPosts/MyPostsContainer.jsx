import React from 'react';
import {addLettersActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// Это контейнерная компонента, задача которой только обратиться
// к презентанционной компоненте <MyPosts /> и снабдить ее логикой/dispatch'ами и BLL данными

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    //при нажимании вызываем profileReducer с помощью метода .dispatch и понеслась.
    //Основной движ в profile-reducer.js за всеми комментариями туда
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    //при нажимании вызываем profileReducer с помощью метода .dispatch и понеслась.
    //Основной движ в profile-reducer.js за всеми комментариями туда
    let addLetters = (letters) => {
        props.store.dispatch(addLettersActionCreator(letters));
    }
    return (
            <MyPosts
                addPostActionCreatorDumpFunc={addPost}
                addLettersActionCreatorDumpFunk={addLetters}
                postsData={state.profilePage.postsData}
                letterL={state.profilePage.letterL}
            />
    )
}

export default MyPostsContainer;