import React from 'react';
import { useTranslation } from 'react-i18next';
import Typography from '../../components/common/Typography';
import Container from '../../components/common/Container';

const About: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Typography className="font-bold">{t('about')}</Typography>
        </Container>
    );
};

export default About;