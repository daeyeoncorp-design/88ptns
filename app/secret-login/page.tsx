"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Center, Loader, Text } from "@mantine/core";

export default function SecretLogin() {
    const router = useRouter();

    useEffect(() => {
        // Set cookie valid for 30 days
        document.cookie = "88ptns-preview=true; path=/; max-age=2592000";
        // Short delay to ensure cookie is set before redirect
        setTimeout(() => {
            router.replace("/");
        }, 500);
    }, [router]);

    return (
        <Center h="100vh">
            <Loader size="xl" />
            <Text ml="md">Authorizing access...</Text>
        </Center>
    );
}
