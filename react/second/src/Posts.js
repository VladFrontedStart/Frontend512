import Post from "./Post"

function Posts(props) {
    return (
        <div>{
            props.posts.map(post => {
                return
                <Post
                    name={post.name}
                    title={post.title} />
            })
        }

        </div>
    )
}

export default Posts;