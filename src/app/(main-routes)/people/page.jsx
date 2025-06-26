"use client"
import PageLayout from '@/components/layout/PageLayout';
import Partners from '@/components/people-components/Partners';
import Teams from '@/components/people-components/Teams';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { partnersData, teamMembersData } from '@/data/data';


const page = () => {
    return (
        <div>
            <SimpleHero
                title="People"
                breadcrumbs={[{ name: "Home", href: "/" }, { name: "People", href: "/people" }]}
            />

            <PageLayout>
                <div className='space-y-18'>
                    <Partners title="Partners" data={partnersData} />
                    <Teams title="Our Team" data={teamMembersData} />
                </div>
            </PageLayout>
        </div>
    );
};

export default page;