"use client"
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';

const page = () => {
    return (
        <div>
            <SimpleHero
                title="Sectors"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Sectors", href: "/sectors" }]}
            />
        </div>
    );
};

export default page;