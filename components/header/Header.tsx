"use client";
import ImageOptimize from '@/components/common/ImageOptimize';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, Select, SelectItem } from '@nextui-org/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import Accordion from '@/components/common/Accordion';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

interface MenuItem {
    title: string;
    url?: string;
    submenu?: SubmenuItem[];
}

interface SubmenuItem {
    subtitle: string;
    url?: string;
}

const menuItems: MenuItem[] = [
    {
        title: "Chi tiêu",
        url: '/spen',
        submenu: [
            { subtitle: 'Vikki Account', url: '/spen' },
            { subtitle: 'Debit Card', url: '/spen' },
            { subtitle: 'Credit Card', url: '/spen' },
            { subtitle: 'Napas 247 transfer', url: '/spen' },
            { subtitle: 'Bill Payment', url: '/spen' },
            { subtitle: 'Mobile Top-up', url: '/spen' },
        ]
    },
    { title: "Tài khoản", url: '/spen' },
    {
        title: "Vay", url: '/spen',
        submenu: [
            { subtitle: 'Vay tiền mặt', url: '/spen' },
            { subtitle: 'Thấu chi', url: '/spen' },
            { subtitle: 'Trả góp thẻ tín dụng', url: '/spen' }
        ]
    },
    { title: "Tích điểm & Ưu đãi", url: '/spen' },
    { title: "Vikki News", url: '/spen' },
    { title: "Vikki Care", url: '/spen' }
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const handleToggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <Navbar className='py-3 fixed bg-transparent'>
            <div className="container">
                <div className="flex items-center">
                    <NavbarContent>
                        <NavbarMenuToggle
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            className={`sm:hidden w-6 h-6 ${isMobileMenuOpen ? 'active menu-mobile' : ''}`}
                            onClick={handleToggleMenu}
                        />
                        <NavbarBrand>
                            <ImageOptimize src='/assets/logo.png' />
                        </NavbarBrand>
                    </NavbarContent>
                    <ul className="hidden sm:flex items-end gap-8 relative navbar">
                        {menuItems.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 nav-item">
                                <Link href="/" className="text-black hover:text-gray-600 font-semibold text-sm nav-link">
                                    {item.title}
                                </Link>
                                {item.submenu && (
                                    <div className="absolute top-[110%] left-0 w-80 bg-white shadow-md rounded-2xl sub-menu">
                                        <ul className="p-2">
                                            {item.submenu.map((subItem) => (
                                                <li key={subItem.subtitle} className='px-3 py-4'>
                                                    <Link
                                                        href="/"
                                                        className="text-black hover:text-gray-600 font-medium text-sm flex items-center justify-between"
                                                    >
                                                        {subItem.subtitle}
                                                        <BsChevronRight />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="ml-4 flex items-center gap-8">
                        <Button className='btn btn-main'>
                            Tải Vikki ngay
                        </Button>
                        <div className="hidden sm:flex items-center">
                            <Link href="#" className="text-gray-600 hover:text-black">EN</Link>
                            <span className="mx-2">|</span>
                            <a href="#" className="text-gray-600 hover:text-black">VN</a>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <ul className={`flex sm:hidden flex-col w-full h-screen bg-[#F3F4F6] p-4 absolute -left-full top-full ${isMobileMenuOpen ? 'active menu-mobile' : ''}`}>
                    {menuItems.map((item, index) => (
                        <Accordion
                            title={item.title}
                            isOpen={openAccordion === index}
                            onClick={() => handleAccordionClick(index)}
                            key={`${item}-${index}`}
                            url={item.submenu ? undefined : item.url}
                        >
                            {item.submenu && item.submenu.length > 0 && (
                                <ul className='bg-white rounded-2xl py-2'>
                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className='px-3 py-4'>
                                            <Link
                                                href={subItem.url ?? '/'}
                                                className="text-black hover:text-gray-600 font-medium text-sm flex items-center justify-between"
                                            >
                                                {subItem.subtitle}
                                                <BsChevronRight />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Accordion>
                    ))}
                    <LanguageSwitcher />
                </ul>
            )}
        </Navbar>
    );
}

export default Header;
