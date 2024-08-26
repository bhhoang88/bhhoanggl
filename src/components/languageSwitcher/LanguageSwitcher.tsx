import React, { useState, useEffect } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'VN');

    const handleSelect = (countryCode: string) => {
        let language = 'vi';
        if (countryCode === 'US') {
            language = 'en';
        }

        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        setSelectedLanguage(countryCode);
    };

    useEffect(() => {
        const languageMap: { [key: string]: string } = {
            vi: 'VN',
            en: 'US'
        };
        setSelectedLanguage(languageMap[i18n.language] || 'VN');
    }, [i18n.language]);

    return (
        <ReactFlagsSelect
            countries={["VN", "US"]}
            customLabels={{ "VN": "Việt Nam", "US": "English" }}
            selected={selectedLanguage}
            onSelect={handleSelect}
            rfsKey="app-lang"
            placeholder="Select Language"
            className="menu-flags p-0"
            selectButtonClassName="menu-flags-button p-0 border-none rounded-none font-body"
        />
    );
};

export default LanguageSwitcher;
