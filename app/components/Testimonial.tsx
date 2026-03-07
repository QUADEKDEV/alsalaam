import React from "react";
import { Counter } from "./Counter";
import {motion} from "framer-motion"

const Testimonial = () => {
  const stats = [
    { label: "Years of Excellence", value: 10, suffix: "+" },
    { label: "Project Complete", value: 1200, suffix: "+" },
    { label: "Team Ready", value: 20, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "k+" },
  ];
  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-amber-500 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-400 text-xs uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
