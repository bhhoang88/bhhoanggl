import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('HomePage');
    return (
        <section className="section">
            <div className="container">
                <h1>{t('title')}</h1>
            </div>
        </section>
    );
}