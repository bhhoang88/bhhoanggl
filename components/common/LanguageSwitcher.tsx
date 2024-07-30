import React, { useState } from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import ReactFlagsSelect, { Gb, Vn } from 'react-flags-select';

const languages = [
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en', label: 'English' },
];

const LanguageSwitcher: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('vi');

    const handleLanguageChange = (newLanguage: string) => {
        setSelectedLanguage(newLanguage);
    };

    const getFlagIcon = (language: string) => {
        switch (language) {
            case 'vi':
                return <Vn className='w-full h-full' />;
            case 'en':
                return <Gb className='w-full h-full' />;
            default:
                return null;
        }
    };

    return (
        <Select
            className='p-0 selectlangue'
            label={<p className='text-sm font-semibold text-[#0C0C0E]'>Language</p>}
            value={selectedLanguage}
            selectionMode="single"
            onChange={(event) => handleLanguageChange(event.target.value)}
            defaultSelectedKeys={[`${selectedLanguage}`]}
            renderValue={() => {
                const selectedItem = languages.find(
                    (item) => item.value === selectedLanguage
                );
                if (selectedItem) {
                    return (
                        <div className='flex items-center mt-3'>
                            <div className='mr-2 w-[24px] h-[24px]'>{getFlagIcon(selectedLanguage)}</div>
                            <div>{selectedItem.label}</div>
                        </div>
                    );
                }
                return selectedLanguage;
            }}
        >
            {languages.map((language) => (
                <SelectItem key={language.value} value={language.value} title={language.label}>
                    {getFlagIcon(language.value)} {language.label}
                </SelectItem>
            ))}
        </Select>
    );
};

export default LanguageSwitcher;


