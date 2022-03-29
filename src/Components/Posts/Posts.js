import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="bg-gray-300">
            <div className="container">
                <h2 className="text-4xl my-4">
                    All Posts here : {posts.length}{" "}
                </h2>
                <div className="flex gap-5">
                    <div className=" w-1/3  bg-red-500 ">
                        <h2>Posts ID</h2>
                        {posts.map((post) => (
                            <Link to={`/posts/${post.id}`} key={post.id}>
                                {post.id}
                            </Link>
                        ))}
                    </div>
                    <div className="grow bg-green-400 fixed top-40 right-20 w-1/2 p-5 h-screen">
                        <h2 className="text-4xl text-purple-600">
                            Selected Post Details
                        </h2>

                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
