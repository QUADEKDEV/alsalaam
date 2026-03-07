"use client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {Award,Globe,Heart,ArrowRight,Play,ChevronDown, Pause} from "lucide-react";
import Testimonial from "../components/Testimonial";

import { useRef, useState } from "react";

const values = [
  {
    title: "Precision & Accuracy",
    description:
      "We are committed to delivering highly accurate survey data using advanced GNSS, total station, and geospatial technologies to ensure dependable project outcomes.",
    icon: <Award className="text-amber-500" size={24} />,
  },
  {
    title: "Integrity & Compliance",
    description:
      "Our operations adhere strictly to regulatory standards, ethical practices, and industry guidelines, ensuring transparency and trust in every engagement.",
    icon: <Heart className="text-amber-500" size={24} />,
  },
  {
    title: "Innovation & Technology",
    description:
      "We leverage cutting-edge GIS platforms, UAV mapping, and digital data processing tools to provide efficient, forward-thinking solutions.",
    icon: <Globe className="text-amber-500" size={24} />,
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-amber-200 selection:text-amber-900">
      <NavBar />
      <section className="relative h-1/3 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1639847648040-b1af1ce3cecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lzfGVufDB8fDB8fHww"
            className="w-full h-full object-cover"
            alt="Royal Crest"
          />
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 font-medium tracking-[0.4em] uppercase text-sm mb-6 block"
          >
            Since 1998
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif text-white font-bold leading-tight mb-8"
          >
            Defining the Future <br /> of Mapping.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="animate-bounce mt-12 text-white/50">
              <ChevronDown size={32} />
            </div>
          </motion.div>
        </div>
      </section>






<section className="py-24 md:py-32 container mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/** VIDEO LOGIC */}
      {(() => {
        const videoRef = useRef<HTMLVideoElement | null>(null);
        const [isPlaying, setIsPlaying] = useState(false);

        const handleToggle = () => {
          if (!videoRef.current) return;

          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }

          setIsPlaying(!isPlaying);
        };

        return (
          <>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                src="/media/survey-video.mp4" // put your video inside public folder
                className="w-full h-full object-cover aspect-[4/5]"
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <button
                  onClick={handleToggle}
                  className="flex items-center gap-4 text-white group"
                >
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {isPlaying ? (
                      <Pause fill="white" size={16} />
                    ) : (
                      <Play fill="white" size={16} />
                    )}
                  </div>
                  <span className="font-serif italic text-xl">
                    {isPlaying ? "Pause Video" : "Watch Survey Story "}
                  </span>
                </button>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-100 rounded-full -z-10 blur-3xl opacity-60" />
          </>
        );
      })()}
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">
        Our Heritage
      </span>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
        A Journey Started with a Single Vision of Light.
      </h2>
      <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light">
       <p>p</p>
      </div>
      <div className="pt-4">
        <button className="flex items-center gap-3 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all uppercase tracking-widest text-sm">
          Explore Our Milestones <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  </div>
</section>






      <Testimonial />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We operate at the intersection of tradition and innovation,
              ensuring every client get the best service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl border border-slate-100 bg-[#FDFBF7] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8">
                  {value.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-500 leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Team / Leadership Preview */}

      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
                The Experts Behind Our Precision
              </h2>
              <p className="text-slate-500 text-lg font-light">
                Our multidisciplinary team of licensed surveyors, GIS
                specialists, and engineering professionals deliver accurate,
                reliable, and technology-driven geospatial solutions.
              </p>
            </div>
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
              Join Our Team
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Surv. Isiaq Folorunsho Salam",
                role: "Principal Surveyor & Managing Director",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Chinwe Okafor",
                role: "GIS & Geospatial Analyst",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Tunde Ibrahim",
                role: "Engineering Survey Specialist",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
              },
              {
                name: "Amina Bello",
                role: "Hydrographic Survey Consultant",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <h5 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h5>
                <p className="text-sm text-amber-600 font-medium uppercase tracking-widest mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-amber-500 py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Need Accurate Survey & Geospatial Solutions?
          </h2>
          <button className="px-12 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
            Begin Your Journey
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
