"use client"
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';

const page = () => {
    return (
        <div>
            <SimpleHero
                title="Contact Us"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]}
            />
        </div>
    );
};

export default page;