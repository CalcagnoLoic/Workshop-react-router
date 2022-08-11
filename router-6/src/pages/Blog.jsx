import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Blog = () => {
    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>Our news</h1>

            <Link to="/blog/new" style={{margin: '1rem 0', display: 'inline-block', backgroundColor: 'blanchedalmond', padding: '5px', borderRadius: '10px'}}>Create a new post</Link>

            {
                posts.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
};

export default Blog;