import AboutPreview from "../components/home/AboutPreview";
import AdvisorPreview from "../components/home/AdvisorPreview";
import CommitteePreview from "../components/home/CommitteePreview";
import ContactCTA from "../components/home/ContactCTA";
import EventsNoticesPreview from "../components/home/EventsNoticesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Hero from "../components/home/Hero";
import RecentActivities from "../components/home/RecentActivities";
import SponsorsSection from "../components/home/SponsorsSection";
import StatsSection from "../components/home/StatsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutPreview/>
      <EventsNoticesPreview/>
      <CommitteePreview/>
      <AdvisorPreview/>
      
      <RecentActivities/>
      <StatsSection/>
      <GalleryPreview/>
      <SponsorsSection/>
      <ContactCTA/>
    </main>
  );
};

export default Home;