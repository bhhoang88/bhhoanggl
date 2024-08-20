import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';
import Container from '../common/Container';

const Header: React.FC = () => {
    const { t } = useTranslation();

    return (
        <header className="bg-gray-800 text-white p-4">
            <Container className="mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link to="/">{t('welcome')}</Link>
                </div>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">
                        {t('home')}
                    </Link>
                    <Link to="/about" className="hover:text-gray-300">
                        {t('about')}
                    </Link>
                </nav>
                <LanguageSwitcher />
            </Container>
        </header>
    );
};

export default Header;
