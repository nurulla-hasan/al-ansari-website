import ContactUs from "@/components/home-components/contact-us/ContactUs";
import Hero from "@/components/home-components/hero/Hero";
import LatestNews from "@/components/home-components/latest-news/LatestNews";
import Services from "@/components/home-components/services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestNews />
      <Services />
      <ContactUs/>
    </div>
  );
}
