"use client";

import PageLayout from '@/components/layout/PageLayout';
import Partners from '@/components/people-components/Partners';
import Teams from '@/components/people-components/Teams';
import SimpleHero from '@/components/shared/simple-hero/SimpleHero';
import { partnersData, teamMembersData } from '@/data/data';
import { useTranslations } from 'next-intl';

const PeoplePage = () => {
    const tPeople = useTranslations('PeoplePage');

    const breadcrumbs = [
        { name: 'home', href: "/" }, 
        { name: 'peopleTitle', href: "/people" } 
    ];

    return (
        <div className='min-h-minus-header'>
            <SimpleHero
                title="peopleTitle" 
                breadcrumbs={breadcrumbs}
            />

            <PageLayout>
                <div className='space-y-18'>
                    <Partners title={tPeople('partnersSectionTitle')} data={partnersData} />
                    <Teams title={tPeople('teamSectionTitle')} data={teamMembersData} />
                </div>
            </PageLayout>
        </div>
    );
};

export default PeoplePage;