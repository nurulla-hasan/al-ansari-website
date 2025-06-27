"use client"
import PageLayout from '@/components/layout/PageLayout';
import SectorCard from '@/components/sectors-components/SectorCard';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { sectorsData } from '@/data/data';

const Sectors = () => {
    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="Sectors"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "Sectors", href: "/sectors" }]}
            />

            <PageLayout>
                <div>
                    <h3 className='text-text-muted'>
                        <span className='text-text-title font-semibold'>Al-Ansari & Associates</span> offers legal services across various sectors. Discover why we're the right strategic partner for your business in Qatar.
                    </h3>
                    <div className='border-t border-gray-200 mt-3'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                        {
                            sectorsData && sectorsData.length > 0 ? (
                                sectorsData.map((sector) => (
                                    <SectorCard key={sector._id} sector={sector} />
                                ))
                            ) : (
                                <p>No sectors available</p>
                            )}
                    </div>
                </div>
            </PageLayout>
        </div>
    );
};

export default Sectors;