import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    console.log(props);

    let postsElement = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
        newPostElement.current.value = '';
    }

    let addLetters = () => {
        let letters = newPostElement.current.value;
        props.addLetter(letters);
    }


    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea ref={newPostElement} onChange={addLetters} value={props.letter}/>
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