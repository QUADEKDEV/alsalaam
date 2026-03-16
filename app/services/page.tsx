"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "../components/NavBar";
import {
  Wifi,
  Waves,
  Wind,
  Coffee,
  ArrowRight,
  Star,
  ChevronRight,
  Map,
  Drill,
  Satellite,
  Compass,
  CheckCircle2,
  HardHat,
} from "lucide-react";
import Footer from "../components/Footer";

const services = [
  {
    title: "Topographic Surveying",
    icon: <Map />,
    desc: "Detailed 3D terrain mapping for architectural design and land development.",
    img: "https://media.istockphoto.com/id/2228206274/photo/digital-topographic-map-with-location-pins.webp?a=1&b=1&s=612x612&w=0&k=20&c=aQToNeodkDZceIe7ORP5PHw4ClSuI-6zKMyR-HYp4Vw=",
  },
  {
    title: "Engineering Layout",
    icon: <Drill />,
    desc: "Precision staking for foundations, roads, and critical infrastructure.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "GIS & Remote Sensing",
    icon: <Satellite />,
    desc: "Advanced digital data management and satellite imagery analysis.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
  },
  {
    title: "Hydrographic Survey",
    icon: <Compass />,
    desc: "Underwater topography for marine, port, and coastal development.",
    img: "/media/usv.jpg",
  },
  {
    title: "As-Built Surveys",
    icon: <CheckCircle2 />,
    desc: "Final verification and high-precision mapping of completed projects.",
    img: "https://media.istockphoto.com/id/1392838202/photo/discussion-on-urban-development-by-male-and-female-engineers-on-construction-sites.webp?a=1&b=1&s=612x612&w=0&k=20&c=RMxjgvic69WrtBcxmDGOPKFFG16eYtm03FEigVtsgg0=",
  },
  {
    title: "Consultancy",
    icon: <HardHat />,
    desc: "Expert witness, legal boundary mapping, and dispute resolution.",
    img: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3VsdGFudHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-amber-200 selection:text-amber-900">
      <NavBar />
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/544445760/photo/geographic-information-systems-concept-woman-scientist-working-with-futuristic-gis.webp?a=1&b=1&s=612x612&w=0&k=20&c=Viiqn0bFbDzjAaCGFsFItHhW3wIblPqdwYhBRZpgmro="
            className="w-full h-full object-cover"
            alt="Suites Background"
          />
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Our services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight"
          >
            Precise & Accurate
          </motion.h1>
        </div>
      </section>

      {/* Suites Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {services.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl shadow-slate-200 mb-8">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    {service.title && (
                      <span className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                        {service.title}
                      </span>
                    )}
                    <span className="bg-white/90 backdrop-blur text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                      {service.title}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-0 right-0 p-8">
                    <div className="bg-slate-900/80 backdrop-blur-xl text-white p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-2xl font-serif font-bold text-amber-400">
                        Learn more{" "}
                        <ArrowRight
                          size={20}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Container */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-2">
                  <div className="flex-1">
                    <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>

                    {/* Amenities Icons */}
                    <div className="flex items-center gap-4 text-slate-300">
                      <Wifi size={18} />
                      <Waves size={18} />
                      <Wind size={18} />
                      <Coffee size={18} />
                      <div className="w-px h-4 bg-slate-200 mx-2" />
                      <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                        +12 More
                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button className="flex items-center gap-2 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all uppercase tracking-widest text-xs">
                      View Details <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Comparison Preview / CTA */}
      <section className="bg-slate-900 text-white py-24 px-6 overflow-hidden relative">
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <Star
            className="text-amber-500 mx-auto mb-8"
            size={40}
            fill="currentColor"
          />
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Bespoke Experience
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            All our residences include complimentary airport transfers, daily
            breakfast in our signature restaurant, and a dedicated curator to
            design your itinerary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-3 group">
              Get in Touch{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
              Go back Home
            </button>
          </div>
        </div>

        {/* Background Decals */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </section>

      {/* Trust Footer */}
      <footer className="py-16 border-t border-slate-200">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">
              4.9/5
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
              Client Rating
            </p>
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">24/7</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
               Support
            </p>
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">100%</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
              Guaranty
            </p>
          </div>
          <div>
            <p className="text-2xl font-serif font-bold text-slate-900">Free</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mt-2">
              Cancellations
            </p>
          </div>
        </div>
      </footer>
      <Footer/>
    </div>
  );
}
