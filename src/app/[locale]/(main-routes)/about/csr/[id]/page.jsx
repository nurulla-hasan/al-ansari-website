
import PageLayout from "@/components/layout/PageLayout";
import SimpleHero from "@/components/shared/simple-hero/SimpleHero";
import { csrData } from "@/data/data";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const CsrDetails = async  ({ params }) => {
    const tCsrDetailsPage = await getTranslations('CsrDetailsPage');


    const id = (await params).id;
    const item = csrData.find((dataItem) => dataItem.id === id); 

    if (!item) {
        return (
            <div className="min-h-minus-header flex items-center justify-center">
                <p className="text-lg text-red-500">{tCsrDetailsPage('notFound')}</p> 
            </div>
        );
    }

    return (
        <div>
            <SimpleHero
                title="detailsTitle" 
                breadcrumbs={[
                    { name: "home", href: "/" }, 
                    { name: "aboutUsTitle", href: "/about" },
                    { name: "csrTitle", href: "/about/csr" }, 
                    { name: "detailsTitle", href: `/about/csr/${item?.id}` } 
                ]}
            />
            <PageLayout>
                <h1 className="font-poltawski text-2xl md:text-5xl font-bold mb-8 md:mb-12 text-text-title">
                    {item?.title}
                </h1>

                <div className="relative w-full aspect-[16/5] rounded-xl overflow-hidden mb-8">
                    <Image
                        src={item?.imageSrc}
                        alt={item?.title || tCsrDetailsPage('notFound')}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <p className="md:text-xl text-sm px-2 text-gray-700 leading-relaxed">
                    {item?.description}
                </p>
            </PageLayout>
        </div>
    );
};

export default CsrDetails;