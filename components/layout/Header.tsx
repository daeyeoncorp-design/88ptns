"use client";

import { useState, useEffect } from "react";
import { Container, Group, Burger, Menu, Text, Box, UnstyledButton, List, ThemeIcon, Collapse, rem, Anchor } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
// Using simple CSS for now instead of classes to iterate fast, but keeping it clean.

const MENU_ITEMS = [
    { label: "HOME", link: "/" },
    { label: "COMPANY", link: "/company" },
    { label: "PRODUCTS", link: "/products" },
    { label: "SERVICES", link: "/services" },
    { label: "CONTACT", link: "/contact" },
];

const SUBMENU_ITEMS = [
    "Submenu Item 1",
    "Submenu Item 2",
    "Submenu Item 3",
    "Submenu Item 4",
    "Submenu Item 5",
];

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const [scroll] = useWindowScroll();
    const isScrolled = scroll.y > 50;

    // Header Styles
    const headerBg = isScrolled ? "rgba(255, 255, 255, 0.8)" : "transparent";
    const headerBackdropFilter = isScrolled ? "blur(10px)" : "none";
    const textColor = isScrolled ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
    const logoText = isScrolled ? "88" : "88 PARTNERS";

    return (
        <Box
            component="header"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: headerBg,
                backdropFilter: headerBackdropFilter,
                transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, color 0.3s ease",
                borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
            }}
        >
            <Container size="xl" h={80}>
                <Group justify="space-between" h="100%" px="md">

                    {/* Logo Section */}
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Text
                            component={motion.div}
                            layout
                            style={{
                                fontSize: 24,
                                fontWeight: 900,
                                color: textColor,
                                letterSpacing: -1,
                                cursor: 'pointer'
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={isScrolled ? "short" : "full"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {logoText}
                                </motion.span>
                            </AnimatePresence>
                        </Text>
                    </Link>

                    {/* Desktop Menu */}
                    <Group gap="xl" visibleFrom="sm">
                        {MENU_ITEMS.map((item) => (
                            <Menu key={item.label} trigger="hover" openDelay={100} closeDelay={200} offset={20}>
                                <Menu.Target>
                                    <Box style={{ position: 'relative', cursor: 'pointer', padding: '10px 0' }} className="group">
                                        <Text
                                            fw={500}
                                            size="sm"
                                            style={{
                                                color: textColor,
                                                transition: "color 0.3s ease"
                                            }}
                                        >
                                            {item.label}
                                        </Text>
                                        {/* Underline Animation */}
                                        <Box
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                width: '0%',
                                                height: 2,
                                                backgroundColor: textColor,
                                                transition: 'width 0.3s ease',
                                            }}
                                            className="hover-underline"
                                        />
                                        <style jsx global>{`
                            .group:hover .hover-underline {
                                width: 100% !important;
                            }
                        `}</style>
                                    </Box>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    {/* Dummy Submenu Items */}
                                    {SUBMENU_ITEMS.map((sub, index) => (
                                        <Menu.Item key={index}>{sub}</Menu.Item>
                                    ))}
                                </Menu.Dropdown>
                            </Menu>
                        ))}
                    </Group>

                    {/* Mobile Menu Button */}
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" color={textColor} />
                </Group>
            </Container>

            {/* Mobile Drawer (Simplistic for now) */}
            <Collapse in={opened} hiddenFrom="sm">
                <Box bg="white" p="md" style={{ borderTop: '1px solid #eee' }}>
                    {MENU_ITEMS.map((item) => (
                        <UnstyledButton key={item.label} py="xs" display="block" w="100%">
                            <Text fw={600} size="lg">{item.label}</Text>
                        </UnstyledButton>
                    ))}
                </Box>
            </Collapse>

        </Box>
    );
}
