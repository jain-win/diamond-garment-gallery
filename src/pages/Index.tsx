
import Layout from "../components/layout/Layout";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";

// Add grid pattern for background
import "../styles/grid-pattern.css";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
