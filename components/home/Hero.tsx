"use client";

import { Box, Button, Center, Container, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function Hero() {
    const theme = useMantineTheme();
    // Simplified media query for mobile/tablet differentiation
    // Matches Mantine 'sm' breakpoint (usually 48em / 768px)
    const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

    return (
        <Box h="100vh" w="100%" style={{ position: "relative", overflow: "hidden", backgroundColor: 'black' }}>

            {/* Background Layer */}
            {isMobile ? (
                // Mobile Background
                <Box
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', // Fallback gradient
                        zIndex: 0
                    }}
                />
            ) : (
                // Desktop Video Background
                <video
                    autoPlay
                    muted
                    playsInline
                    // No loop as requested
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Cover the screen
                        zIndex: 0,
                    }}
                >
                    {/* Using the file found in directory */}
                    <source src="/film/AZvfl3Pz2eeUAoEVKkpm6g-AZvfl3PzWEJcBaNyrf1lCQ.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Overlay for readability (Optional, light dark overlay) */}
            <Box
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)', // Slight tint
                    zIndex: 1
                }}
            />

            {/* Content Layer */}
            <Box style={{ position: "relative", zIndex: 2, height: "100%" }}>
                <Center h="100%">
                    <Container size="lg">
                        <Stack align="center" gap="xl">
                            <Title
                                order={1}
                                c="white"
                                ta="center"
                                style={{
                                    fontSize: isMobile ? 42 : 80,
                                    fontWeight: 900,
                                    letterSpacing: -2,
                                    lineHeight: 1.1,
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)'
                                }}
                            >
                                INNOVATING<br />THE FUTURE
                            </Title>
                            <Text
                                c="white"
                                ta="center"
                                size={isMobile ? "lg" : "xl"}
                                maw={600}
                                style={{ opacity: 0.9 }}
                            >
                                88 PARTNERS는 신약개발에 필요한 모든 것을 제공합니다.<br />
                                비임상실험을 위한 최적의 국내 CRO 입니다.
                            </Text>
                        </Stack>
                    </Container>
                </Center>
            </Box>

        </Box>
    );
}
