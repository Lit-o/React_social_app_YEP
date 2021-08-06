import cl from './Post.module.css';
import React from "react";

const Post = (props) => {
    return (
        <div className={cl.item}>
            <img className={cl.avatar} alt="avatar" src='https://www.images.lesyadraw.ru/2014/07/kak_narisovat_aang_avatar0.jpg' />
            <span>{props.message} </span>
            <span><strong>--</strong> likes - {props.likes}</span>
        </div>
    )
}

export default Post;