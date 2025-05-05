import Hero from "../../../components/public/HeroSection/HeroSection";
import Service from "../../../components/public/Service/Service";
import Map from "../../../components/public/Map/Map";
import Encourage from "../../../components/public/Encourage/Encourage";
import HowItWorks from "../../../components/public/HowItWorks/HowItWorks";
import Testimonials from "../../../components/public/Testimonials/Testimonials";
import RecommendedClinics from "../../../components/common/RecommendedClinics/RecommendedClinics ";
import { useClinicContext } from "../../../contexts/ClinicProvider";
import FAQSection from "../../../components/public/FAQs/FAQSection";

const Home = () => {
  const { clinics, loading, error } = useClinicContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Hero />
      <Service />
      <Map />
      <Encourage />
      <Testimonials />
      <HowItWorks />
      <RecommendedClinics clinics={clinics} />
      <FAQSection />
    </>
  );
};

export default Home;
