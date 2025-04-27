"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import sendRequest from "@/utils/sendRequest";

function GeneratePostForm({ addPost }) {
    const [topic, setTopic] = useState("");
    const [style, setStyle] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleGenerate = async () => {
        try {
            const data = await sendRequest(`${process.env.SERVER_URL}/generate/`, {
                method: "POST",
                body: JSON.stringify({ topic, style }),
            });

            setTitle(data.title);
            setContent(data.generatedText);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePost = async () => {
        try {
            const data = await sendRequest(`${process.env.SERVER_URL}/posts/save`, {
                method: "POST",
                body: JSON.stringify({ title, content }),
            });
            addPost(data.post);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Create a New Post</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-6">
                <div className="flex-1 space-y-4">
                    <Input placeholder="Enter a topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
                    <Input placeholder="Enter a writing style" value={style} onChange={(e) => setStyle(e.target.value)} />
                    <Button onClick={handleGenerate} className="w-full">
                        Generate
                    </Button>
                </div>
                <div className="flex-1 space-y-4">
                    <Input placeholder="Enter your title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Textarea placeholder="Enter your text" value={content} onChange={(e) => setContent(e.target.value)} />
                    <Button onClick={handlePost} className="w-full">
                        Post!
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default GeneratePostForm;
