"use client"
import { motion } from 'framer-motion';
import {Award,Globe,Heart} from "lucide-react";
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
const Phylosophy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">
            Our Philosophy
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We operate at the intersection of tradition and innovation, ensuring
            every client get the best service.
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
  );
}

export default Phylosophy
