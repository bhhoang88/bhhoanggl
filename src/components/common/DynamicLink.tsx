"use client";

import React, { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { serialize, handleUrl } from '@/config/urlHelper';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface DynamicLinkProps {
    href: string;
    as: string;
    children: ReactNode;
    scroll?: boolean;
}

const DynamicLink: React.FC<DynamicLinkProps> = React.memo(function DynamicLink(props) {
    const { href, as, children, scroll = true } = props;

    const { language } = useSelector((state: RootState) => state.app);

    const [remapLink, setRemapLink] = useState({
        href: '',
        as: '',
    });

    useEffect(() => {
        if (href && as) {
            setRemapLink({
                href: href.replace('//', '/'),
                as: as.replace('//', '/'),
            });
        }
    }, [href, as]);

    return href?.charAt(0) === '/' ? (
        <Link
            href={`${serialize(remapLink.href || '', { lang: language, scroll: scroll })}`}
            as={handleUrl(remapLink.as || '', language)}
            scroll={scroll}
        >
            {children}
        </Link>
    ) : (
        <Link href={`${serialize(href)}`} as={handleUrl(as)} scroll={scroll}>
            {children}
        </Link>
    );
});

export default DynamicLink;
