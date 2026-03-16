import React from 'react'
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">
              The Experts Behind Our Precision
            </h2>
            <p className="text-slate-500 text-lg font-light">
              Our multidisciplinary team of licensed surveyors, GIS specialists,
              and engineering professionals deliver accurate, reliable, and
              technology-driven geospatial solutions.
            </p>
          </div>
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all">
            Join Our Team
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Surv. Isiaq Folorunso Salaam (mnis)",
              role: "Principal Surveyor & Managing Director",
              img: "/media/md.png",
            },
            {
              name: "Chinwe O.T.",
              role: "GIS & Geospatial Analyst",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            },
            {
              name: "A.M. Ibrahim",
              role: "Engineering Survey Specialist",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
            },
            {
              name: "P.J. Amina",
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
  );
}

export default Team
