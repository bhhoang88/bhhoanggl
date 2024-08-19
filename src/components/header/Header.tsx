"use client";

import React from "react";
import { Navbar, NavbarMenuToggle, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import ImageOptimize from "../common/ImageOptimize";
import DynamicLink from "../common/DynamicLink";
import { siteConfig } from "@/config/config";
import { DiscordIcon, GithubIcon, TwitterIcon } from "../icons";
import { IconBrandX } from "@tabler/icons-react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const menuItems: string[] = [
        "Giới thiệu",
        "Dịch vụ",
        "Dự án",
        "Blog",
        "Khoá học",
        "Liên hệ",
    ];

    return (
        <Navbar maxWidth={'full'} classNames={{ wrapper: "px-0 py-3 h-auto" }} onMenuOpenChange={setIsMenuOpen}>
            <div className="container">
                <div className="flex items-center justify-between gap-8">
                    <NavbarContent>
                        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                        <DynamicLink href="/" as="/">
                            <ImageOptimize src="/logo.svg" alt="Logo" className="logo" />
                        </DynamicLink>
                    </NavbarContent>
                    <NavbarContent className="flex-col gap-0 items-end">
                        <NavbarContent>
                            <NavbarItem className="hidden sm:flex gap-2">
                                <Link isExternal href={siteConfig.links.twitter}>
                                    <TwitterIcon className="text-default-500" />
                                    <IconBrandX />
                                </Link>
                                <Link isExternal href={siteConfig.links.discord}>
                                    <DiscordIcon className="text-default-500" />
                                </Link>
                                <Link isExternal href={siteConfig.links.github}>
                                    <GithubIcon className="text-default-500" />
                                </Link>
                            </NavbarItem>
                        </NavbarContent>
                        <NavbarContent>
                            {menuItems.map((item, index) => (
                                <NavbarMenuItem key={`${item}-${index}`}>
                                    <DynamicLink href="/" as="/">
                                        {item}
                                    </DynamicLink>
                                </NavbarMenuItem>
                            ))}
                        </NavbarContent>
                    </NavbarContent>
                </div>
            </div>
        </Navbar>
    );
};

export default Header;
