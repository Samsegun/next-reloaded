import {
    Button,
    Container,
    Html,
    Link,
    Tailwind,
    Text,
    Preview,
    Body,
} from "@react-email/components";
import * as React from "react";

export default function Email({ name }: { name: string }) {
    return (
        <Html>
            <Preview>Welcome aboard!</Preview>
            <Tailwind>
                <Body className='bg-gray-200'>
                    <Container>
                        <Text className='text-4xl font-bold text-center'>
                            Hello {name}
                        </Text>
                        <Link href='https://samsegun.vercel.app'>
                            www.samasegun.vercel.app
                        </Link>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
