import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState({});

    const { postID } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then((res) => res.json())
            .then((data) => setPost(data));
    }, [postID]);
    return (
        <>
            <h2 className="text-2xl my-3">Post Details: {post?.id}</h2>
            <h4 className="text-4xl mb-3">name : {post?.title}</h4>
            <p>{post?.body}</p>
        </>
    );
};

export default Post;
