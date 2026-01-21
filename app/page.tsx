"use client";

import { Container, Title, Text, Button, Group, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Group justify="space-between" align="center">
          <Title order={3}>88 PARTNERS</Title>
          <Button variant="light">Contact</Button>
        </Group>

        <div style={{
          height: 400,
          background: 'var(--mantine-color-blue-filled)',
          borderRadius: 'var(--mantine-radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white'
        }}>
          <Title>Main Visualization Area</Title>
        </div>

        <Title order={2} mt="xl">About U</Title>
        <Text>
          여기는 88 Partners의 메인 페이지입니다.
          관리자 또는 허가된 사용자만 볼 수 있는 페이지입니다.
        </Text>

        <Title order={2} mt="xl">Services</Title>
        <Group>
          <div style={{ flex: 1, padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
            <Title order={4}>Service 1</Title>
            <Text size="sm" mt="sm">Description of service 1.</Text>
          </div>
          <div style={{ flex: 1, padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
            <Title order={4}>Service 2</Title>
            <Text size="sm" mt="sm">Description of service 2.</Text>
          </div>
          <div style={{ flex: 1, padding: 20, border: '1px solid #eee', borderRadius: 8 }}>
            <Title order={4}>Service 3</Title>
            <Text size="sm" mt="sm">Description of service 3.</Text>
          </div>
        </Group>
      </Stack>
    </Container>
  );
}
