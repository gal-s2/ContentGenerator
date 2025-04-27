import { useEffect } from "react";
import { useRouter } from "next/navigation";

const protectedRoute = (WrappedComponent) => {
    return (props) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem("token");

            if (!token) {
                router.push("/auth?form=login");
            }
        }, [router]);

        return <WrappedComponent {...props} />;
    };
};

export default protectedRoute;
