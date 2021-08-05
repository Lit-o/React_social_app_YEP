import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement}></textarea>
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