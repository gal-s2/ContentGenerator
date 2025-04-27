import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96 space-y-4">
                <div>
                    <Link href="/auth/signup">
                        <Button className="w-full py-2  bg-black text-white rounded-md hover:bg-gray-800">Signup</Button>
                    </Link>
                </div>
                <div>
                    <Link href="/auth/login">
                        <Button className="w-full py-2 b bg-black text-white rounded-md hover:bg-gray-800">Login</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
