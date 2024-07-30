// components/common/Accordion.tsx
import React from 'react';
import styles from '../../styles/Accordion.module.css';
import Link from 'next/link';
import { BsChevronRight } from 'react-icons/bs';

interface AccordionProps {
    title: string;
    children?: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
    url?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onClick, url }) => {
    const hasContent = React.Children.count(children) > 0;
    const hasSubItems = React.Children.count(children) > 0; // Check if there are subitems

    return (
        <div className={styles.accordionItem}>
            <div
                className={`${styles.accordionHeader} ${hasSubItems ? (isOpen ? styles.accordionHeaderOpen : styles.accordionHeaderClosed) : ''} ${hasSubItems ? styles.accordionHeaderWithSubItems : ''} py-3`}
                onClick={onClick}
                role="button"
                aria-expanded={isOpen}
                tabIndex={0}
            >
                {url ? (
                    <Link href={url} className={`${styles.link} text-sm`}>
                        {title}
                        {hasSubItems && <BsChevronRight className={`${isOpen ? styles.accordionHeaderOpen : styles.accordionHeaderClosed} w-full`} />}
                    </Link>
                ) : (
                    <p className='flex items-center justify-between text-sm'>
                        {title}
                        {hasSubItems && <BsChevronRight className={isOpen ? styles.accordionHeaderOpen : styles.accordionHeaderClosed} />}
                    </p>
                )}
            </div>
            {hasContent && (
                <div className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ''}`}>
                    <ul className={styles.list}>
                        {React.Children.map(children, (child, index) => (
                            <li key={index} className={styles.listItem}>{child}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Accordion;
