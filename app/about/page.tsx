import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";
import Aboutheader from "../components/Aboutheader";
import Phylosophy from "../components/Phylosophy";
import VideoSection from "../components/VideoSection";
import Team from "../components/Team";
import AboutCTA from "../components/AboutCTA";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-amber-200 selection:text-amber-900">
      <NavBar />
      <Aboutheader />
      <VideoSection />
      <Testimonial />
      <Phylosophy />
      <Team/>
      <AboutCTA/>
      <Footer />
    </div>
  );
}
