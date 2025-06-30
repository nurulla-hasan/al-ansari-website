"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { newsData } from '@/data/data';


const Newsletters = () => {
    const totalResults = newsData.length;
    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="Insights"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Insights", href: "/insights" }, { name: "Newsletters", href: "/insights/newsletters" }]}
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>Showing 1 - {totalResults} of {totalResults} results</p>
                <div className='space-y-18'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {newsData && newsData.length > 0 ? (
                            newsData.map((item) => (
                                <InsightsCard key={item._id} data={item} pathname={"newsletters"}/>
                            ))
                        ) : (
                            <p>No newsletters available</p>
                        )}
                    </div>
                </div>
            </PageLayout>

        </div>
    );
};

export default Newsletters;