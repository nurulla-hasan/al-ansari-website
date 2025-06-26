"use client"
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';

const page = () => {
    return (
        <div>
            <SimpleHero
                title="Insights"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Insights", href: "/insights" }]}
            />
        </div>
    );
};

export default page;