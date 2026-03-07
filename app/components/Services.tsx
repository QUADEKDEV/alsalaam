import React from "react";
import { motion } from "framer-motion";
import {Map,Drill,Satellite,Compass,CheckCircle2,HardHat,ArrowRight,} from "lucide-react";

const ServicesSection = () => {
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

  return (
    <section
      id="services"
      className="relative py-24 px-8 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-24 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-24 right-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="text-center mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#EB9D0E] font-semibold tracking-wider uppercase text-sm"
        >
          Our Expertise
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600"
        >
          Comprehensive Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Leveraging cutting-edge technology to deliver pinpoint accuracy from
          site planning to structural monitoring.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-white border border-slate-100 rounded-3xl p-1 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Header */}
            <div className="h-48 w-full overflow-hidden rounded-t-[22px]">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#EB9D0E] text-white p-3 rounded-2xl shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform duration-300">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {service.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-6 line-clamp-2">{service.desc}</p>

              <div className="flex items-center text-[#EB9D0E] font-semibold cursor-pointer group/link">
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-2" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;