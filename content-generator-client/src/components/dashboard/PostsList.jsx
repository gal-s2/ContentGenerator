"use client";

import Post from "./Post";

export default function PostList({ posts = [] }) {
    if (posts.length === 0) {
        return <p className="text-center text-gray-500">You havent published any post yet!</p>;
    }

    return (
        <div className="grid gap-4">
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}
