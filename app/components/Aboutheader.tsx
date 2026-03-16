"use client"
import { motion } from "framer-motion";
import {ChevronDown} from "lucide-react";


const Aboutheader = () => {
  return (
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
          className="text-amber-400 font-medium tracking-[0.4em] uppercase text-sm mt-42 block"
        >
          Since 2023
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight py-6"
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
  );
}

export default Aboutheader
