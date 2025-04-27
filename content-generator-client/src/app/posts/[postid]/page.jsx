"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import sendRequest from "@/utils/sendRequest";
import protectedRoute from "@/components/protectedRoute";

function PostPage(props) {
    const params = use(props.params);
    const { postid } = params;
    const router = useRouter();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPost() {
            try {
                const data = await sendRequest(`http://localhost:8000/posts/${postid}`);
                setPost(data);
            } catch (error) {
                console.error(error);
                router.push("/not-found"); // Or handle differently
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [postid, router]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold animate-pulse">Loading...</h1>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-semibold">Post not found.</h1>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
            <div className="prose prose-lg">
                <p>{post.content}</p>
            </div>
        </div>
    );
}

export default protectedRoute(PostPage);
