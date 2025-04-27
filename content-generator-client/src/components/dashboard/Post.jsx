import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Post({ post }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className="text-gray-600">{post.content}</p>
            </CardContent>
        </Card>
    );
}

export default Post;
