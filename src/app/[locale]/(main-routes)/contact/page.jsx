"use client";
import ContactInfo from '@/components/contact-components/ContactInfo';
import ContactUs from '@/components/home-components/contact-us/ContactUs';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { useTranslations } from 'next-intl';

const ContactPage = () => {
    const tSimpleHero = useTranslations('SimpleHero');

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="contactTitle"
                breadcrumbs={[
                    { name: "home", href: "/" },
                    { name: "contactTitle", href: "/contact" } 
                ]}
            />
            <ContactInfo />
            <ContactUs />
        </div>
    );
};

export default ContactPage;