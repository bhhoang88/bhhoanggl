import React from "react";
import Link from "next/link";

const NavLink = ({
    children,
    href,
    as
}: {
    children: React.ReactNode;
    href: string;
    as: string;
}): JSX.Element => {
    return (
        <Link href={href} as={as}>
            {children}
        </Link>
    );
};

export default NavLink;
