import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-900 to-green-700 flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/drone-aerial-shot.jpg"
          alt="Aerial drone survey"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Precision Mapping, Future-Proof Engineering
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Leading surveying and geomatics solutions for infrastructure, land
          development, and environmental projects.
        </p>
        <div className="space-x-4">
          <Link
            href="#contact"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#services"
            className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}