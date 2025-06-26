"use client"
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';

const page = () => {
    return (
        <div>
            <SimpleHero
                title="About Us"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]}
            />
        </div>
    );
};

export default page;