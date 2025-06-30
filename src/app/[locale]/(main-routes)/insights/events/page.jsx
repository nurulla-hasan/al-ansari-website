"use client"
import InsightsCard from '@/components/insights-components/InsightsCard';
import PageLayout from '@/components/layout/PageLayout';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { eventsData } from '@/data/data';


const Events = () => {
    const totalResults = eventsData.length;
    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="Insights"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Insights", href: "/insights" }, { name: "Events", href: "/insights/events" }]}
            />

            <PageLayout>
                <p className='mb-4 text-text-muted'>Showing 1 - {totalResults} of {totalResults} results</p>
                <div className='space-y-18'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8'>
                        {eventsData && eventsData.length > 0 ? (
                            eventsData.map((item) => (
                                <InsightsCard key={item._id} data={item} pathname={"events"}/>
                            ))
                        ) : (
                            <p>No events available</p>
                        )}
                    </div>
                </div>
            </PageLayout>

        </div>
    );
};

export default Events;