import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <div className="">
                        <button>Add post</button>
                    </div>
                    <div className="">
                        <button onClick={ addPost }>Remove</button>
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