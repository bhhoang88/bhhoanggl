import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import Container from '../common/Container';
import { Image } from "@nextui-org/react";
import { IconBrandFacebook, IconBrandGithub, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';

const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
];

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='px-0 py-2 w-full' classNames={{
            wrapper: 'p-0, max-w-full h-auto'
        }}>
            <Container className='flex items-center gap-8'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <Link to={'/'} className='logo'>
                        <Image
                            alt=""
                            src="/assets/logo.png"
                            classNames={{
                                wrapper: 'rounded-none w-[348px]'
                            }}
                            className='rounded-none'
                        />
                    </Link>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex sm:flex-col  gap-1 items-end">
                    <NavbarContent>
                        <NavbarItem>
                            <Link color="foreground" to="#">
                                <IconBrandGithub width={16} className='hover:text-[#333]' />
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" to="#">
                                <IconBrandX width={16} className='hover:text-[#1DA1F2]' />
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" to="#">
                                <IconBrandFacebook width={16} className='hover:text-[#1877F2]' />
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" to="#">
                                <IconBrandYoutube width={16} className='hover:text-[#FF0000]' />
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent>
                        <NavbarItem>
                            <Link color="foreground" to="#" className='text-xl'>
                                Features
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="#" aria-current="page" className='text-xl'>
                                Customers
                            </Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link color="foreground" to="#" className='text-xl'>
                                Integrations
                            </Link>
                        </NavbarItem>
                        <LanguageSwitcher />
                    </NavbarContent>
                </NavbarContent>
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                to="#"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <div className="block sm:hidden">
                    <LanguageSwitcher />
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
