"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AuthForm = ({ type, onSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username, password);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full" />
                </div>
                <div>
                    <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" />
                </div>
                <Button type="submit" className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800">
                    {type === "signup" ? "Sign Up" : "Log In"}
                </Button>
            </form>
        </>
    );
};

export default AuthForm;
