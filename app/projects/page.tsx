"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  MapPin,
  Maximize2,
  Database,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import NavBar from "../components/NavBar";

// Sample Project Data
const projects = [
  {
    id: 1,
    title: "Urban Expansion Topography",
    location: "Lagos, Nigeria",
    category: "Topographic",
    size: "450 Hectares",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    tools: ["RTK GNSS", "LiDAR"],
    description:
      "High-precision contour mapping for a major residential development, including utility corridor identification.",
  },
  {
    id: 2,
    title: "Coastal Port GIS Integration",
    location: "Port Harcourt",
    category: "GIS",
    size: "12km Coastline",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200",
    tools: ["ArcGIS", "Sonar"],
    description:
      "Multi-layered GIS database creation for port infrastructure monitoring and bathymetric data analysis.",
  },
  // Add more projects here...
];

const ProjectPage = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Topographic", "GIS", "Cadastral", "Engineering"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">
      <NavBar/>
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        {/* Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
            // size: "40px 40px",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-400 mb-4 font-mono tracking-widest"
          >
            <Database size={18} />
            <span>AL-SALAAM GEO-MAPPING LTD</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Project{" "}
            <span className="text-blue-500 underline decoration-blue-500/30 underline-offset-8">
              Archive
            </span>
          </motion.h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            A comprehensive look at our land surveying, GIS mapping, and
            engineering solutions across the region.
          </p>
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="hidden md:block text-slate-400 text-sm font-mono">
            {filteredProjects.length} PROJECTS LOADED
          </div>
        </div>
      </div>

      {/* --- PROJECT GRID --- */}
      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-200 mb-6 shadow-2xl shadow-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-700 flex items-center gap-1 shadow-sm">
                    <ShieldCheck size={14} /> CERTIFIED SURVEY
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="text-white flex items-center gap-2 font-semibold">
                      View Technical Breakdown <ChevronRight size={18} />
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] font-mono bg-slate-200 px-2 py-0.5 rounded text-slate-600 uppercase"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-6 text-slate-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize2 size={16} /> {project.size}
                  </span>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      {/* --- FOOTER CTA --- */}
      <section className="bg-white py-20 px-8 border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-blue-300">
          <h2 className="text-3xl font-bold mb-4">
            Need Precision for Your Next Project?
          </h2>
          <p className="text-blue-100 mb-8">
            Let Al-Salaam Geo-Mapping provide the ground truth for your
            engineering or legal needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors">
            Request Technical Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
