import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
            {id: 1, message: "Hi, how are you?", likesCount: 23},
            {id: 2, message: "Hi, i'm fine", likesCount: 36},
            {id: 3, message: "I'm fine, thx and u?", likesCount: 11},
            {id: 4, message: "I'm fine, thx and u?", likesCount: 55}
        ];

    let postsElement = postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)

    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea></textarea>
                    <div className="">
                        <button>Add post</button>
                    </div>
                    <div className="">
                        <button>Remove</button>
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