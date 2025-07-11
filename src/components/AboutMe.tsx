import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    I'm a full-stack developer focused on building scalable web apps with modern stacks like Next.js, TailwindCSS, and Express.js. I love turning technical challenges into simple, user-focused solutions and sharing insights to help others build smarter.
                </p>
            </CardContent>
        </Card>
    )
}