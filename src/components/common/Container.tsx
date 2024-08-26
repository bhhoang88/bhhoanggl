import * as React from 'react';
import classNames from 'classnames';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={`container mx-auto ${classNames(className)}`}>
            {children}
        </div>
    );
};

export default Container;
