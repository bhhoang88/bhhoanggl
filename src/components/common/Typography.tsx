import React from 'react';
import classNames from 'classnames';

interface TypographyProps {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ as: Tag = 'p', className, children }) => {
    return (
        <Tag className={classNames(className)}>
            {children}
        </Tag>
    );
};

export default Typography;
