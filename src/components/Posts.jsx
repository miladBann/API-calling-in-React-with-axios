import axios from "axios";
import React, {useState, useEffect, useCallback} from "react";
import { Link, useParams, useNavigate} from "react-router-dom";

function Posts()
{
    const [posts, setPosts] = useState([]);
    const [userID, setUserID] = useState('');
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    const navigate = useNavigate();

    //getPosts is called inside the useEffect and it wants us to  pass getPosts as its argument
    //so we need to make the getPosts func containe a useCallback hook.
    const getPosts = useCallback(async () => {
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        setPosts(posts.data);
    }, [id])

    async function loadPosts()
    {
        const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        setPosts(posts.data);
        navigate(`/posts/${userID}`);
    }

    useEffect(() => {
        getPosts();
        setTimeout(() => {
            setLoading(false);
        }, 300);
        
    }, [getPosts])

    return (
        <div>
            <div className="nav">
                <Link to="/"><button><a href="index.html">⬅️ Back</a></button></Link>

                <div className="search">
                    <h3>Search by ID</h3>
                    <input type="text" onChange={(event) => setUserID(event.target.value)}/>
                    <button onClick={loadPosts}>Enter</button>
                </div>
            </div>

            <div className="container2">

                {
                    loading ? (
                        new Array(10).fill(0).map((_, index) => {
                            return (
                                <div className="post_skeliton" key={index}>
                                    <h3 className="title_skeliton">_</h3>
                                    <p></p>
                                </div>
                            );
                        })
                    ) : (
                        posts.map((post, index) => {
                            return (
                                <div className="post" key={index}>
                                    <h3 className="title">{post.title}</h3>
                                    <p>{post.body}</p>
                                </div>
                            );
                        })
                    )
                    
                }
            </div>
        </div>
    );
}

export default Posts;