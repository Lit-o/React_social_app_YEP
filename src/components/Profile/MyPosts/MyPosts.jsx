import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likes={post.likesCount}/>)

    return (
            <div className={s.posts_block}>
                <h2>My posts</h2>
                <div>
                    <textarea>1</textarea>
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