"use client";

import { useRouter } from "next/navigation";
import AuthForm from "./AuthForm";
import sendRequest from "@/utils/sendRequest";

export default function Auth({ formType }) {
    const router = useRouter();

    const handleAuthSubmit = async (username, password) => {
        const isSignup = formType === "signup";

        try {
            const res = await sendRequest(`${process.env.SERVER_URL}/auth/${isSignup ? "signup" : "login"}`, {
                method: "POST",
                body: JSON.stringify({ username, pwd: password }),
            });

            if (!res.success) {
                throw new Error("Authentication failed");
            }

            if (!isSignup) {
                localStorage.setItem("token", res.token);
                router.push("/dashboard");
            } else {
                router.push("/auth/login");
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
                <h1 className="text-xl font-medium text-center mb-4">{formType === "signup" ? "Sign Up" : "Log In"}</h1>
                <AuthForm type={formType} onSubmit={handleAuthSubmit} />
            </div>
        </div>
    );
}
