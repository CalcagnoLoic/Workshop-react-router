import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Singlepage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/blog/${id}/edit`} style={{margin: '1rem 0', display: 'inline-block', backgroundColor: 'blanchedalmond', padding: '5px', borderRadius: '10px'}}>Do you want modify this post?</Link>
                </>
            )}

        </div>
    );
};

export default Singlepage;