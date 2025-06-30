"use client"
import ContactInfo from '@/components/contact-components/ContactInfo';
import ContactUs from '@/components/home-components/contact-us/ContactUs';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';

const page = () => {
    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="Contact Us"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]}
            />
            <ContactInfo />
            <ContactUs />

        </div>
    );
};

export default page;