"use client";

import protectedRoute from "@/components/protectedRoute";
import PostList from "@/components/dashboard/PostsList";
import GeneratePostForm from "@/components/dashboard/GeneratePostForm";
import { useState, useEffect } from "react";
import sendRequest from "@/utils/sendRequest";

function DashboardPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await sendRequest(`http://localhost:8000/posts/user`, {
                    method: "GET",
                });

                setPosts(res);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchPosts();
    }, []);

    function addPost(newPost) {
        setPosts((prev) => [newPost, ...prev]);
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-center">Dashboard</h1>

            <GeneratePostForm addPost={addPost} />

            <div>
                <h3 className="text-xl font-bold text-center">My Posts</h3>
                <PostList posts={posts} />
            </div>
        </div>
    );
}

export default protectedRoute(DashboardPage);
