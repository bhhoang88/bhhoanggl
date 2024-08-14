"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { serialize, handleUrl } from '@/config/urlHelper';
import { useSelector } from 'react-redux';

interface DynamicLinkProps {
    href: string;
    as: string;
    children: React.ReactNode;
    scroll?: boolean;
}

interface RemapLinkState {
    href: string | null;
    as: string | null;
}

const DynamicLink: React.FC<DynamicLinkProps> = React.memo((props) => {
    const { href, as, children, scroll = true } = props;

    if (typeof window === 'undefined') {
        return null;
    }

    const { language } = useSelector((state) => state.app);
    const [remapLink, setRemapLink] = useState<RemapLinkState>({ href: null, as: null });

    useEffect(() => {
        if (href && as) {
            const newHref = href.replace('//', '/');
            const newAs = as.replace('//', '/');
            setRemapLink({ href: newHref, as: newAs });
        }
    }, [href, as]);

    return href?.charAt(0) === '/' ? (
        <Link
            href={serialize(remapLink.href || '', { lang: language || 'vi', scroll })}
            as={handleUrl(remapLink.as || '', language || 'vi')}
            scroll={scroll}
        >
            {children}
        </Link>
    ) : (
        <Link href={serialize(href, {})} as={handleUrl(as)} scroll={scroll}>
            {children}
        </Link>
    );
});

export default DynamicLink;
