"use client";

import { Box, Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />

      {/* Placeholder Content to allow scrolling for header test */}
      <Container size="lg" py={100}>
        <Stack gap="xl">
          <Title order={2} ta="center" mt={50}>Creating Value Beyond Limits</Title>
          <Text ta="center" maw={800} mx="auto" c="dimmed">
            88 Partners is dedicated to fostering innovation and driving growth.
            We partner with visionaries to build the future.
          </Text>

          <Group justify="center" mt="xl">
            <div style={{ width: '100%', height: 500, background: '#f8f9fa', borderRadius: 16 }}></div>
          </Group>
          <Group justify="center" mt="md">
            <div style={{ width: '100%', height: 500, background: '#f1f3f5', borderRadius: 16 }}></div>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
