import React, { useState, useEffect } from 'react';

interface WithWindowSizeProps {
    isMobile: boolean;
}

function withWindowSize<P extends WithWindowSizeProps>(WrappedComponent: React.ComponentType<P>) {
    return (props: Omit<P, keyof WithWindowSizeProps>) => {
        const [isMobile, setIsMobile] = useState<boolean>(false);

        useEffect(() => {
            const handleResize = () => {
                if (typeof window !== 'undefined') {
                    setIsMobile(window.innerWidth <= 768);
                }
            };

            if (typeof window !== 'undefined') {
                handleResize(); // Set initial value
                window.addEventListener('resize', handleResize);
            }

            return () => {
                if (typeof window !== 'undefined') {
                    window.removeEventListener('resize', handleResize);
                }
            };
        }, []);

        return <WrappedComponent {...(props as P)} isMobile={isMobile} />;
    };
}

export default withWindowSize;
