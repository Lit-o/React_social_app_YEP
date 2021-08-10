import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {addLettersActionCreator, addPostActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let postsElement = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)
    let newPostElement = React.createRef();

    //при нажимании вызываем profileReducer с помощью метода .dispatch и понеслась.
    //Основной движ в profile-reducer.js за всеми комментариями туда
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    //при нажимании вызываем profileReducer с помощью метода .dispatch и понеслась.
    //Основной движ в profile-reducer.js за всеми комментариями туда
    let addLetters = () => {
        let letters = newPostElement.current.value;
        props.dispatch(addLettersActionCreator(letters));
    }

    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement} onChange={ addLetters } value={props.letterL}/>
                    <div className="">
                        <button onClick={ addPost }>Add post</button>
                    </div>
                    <div className="">
                        <button >Remove</button>
                    </div>

                </div>
                <div>
                    Old posts
                    { postsElement }
                </div>
            </div>        
    )
}

export default MyPosts;