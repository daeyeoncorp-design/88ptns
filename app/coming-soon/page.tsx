"use client";

import { Container, Title, Text, Center, Stack } from "@mantine/core";
// Note: Removed unused icons import to fix build error.

export default function ComingSoon() {
    return (
        <Center h="100vh" bg="gray.0">
            <Container>
                <Stack align="center" gap="xl">
                    <div style={{
                        width: 80,
                        height: 80,
                        background: 'var(--mantine-color-dark-9)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 24
                    }}>
                        88
                    </div>

                    <Stack gap={0} align="center">
                        <Title order={1} size={48} fw={900} style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            88 PARTNERS
                        </Title>
                        <Text c="dimmed" size="lg" mt="md">
                            준비 중입니다
                        </Text>
                    </Stack>

                    <Text ta="center" maw={500} c="gray.6">
                        현재 88 Partners의 새로운 웹사이트를 구축하고 있습니다.<br />
                        더 나은 서비스로 찾아뵙겠습니다.
                    </Text>

                    <Text size="sm" c="dimmed" mt={50}>
                        © 2026 88 Partners. All rights reserved.
                    </Text>
                </Stack>
            </Container>
        </Center>
    );
}
