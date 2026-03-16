import React from 'react'
import { ArrowRight, Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
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
                    className="w-full h-[600px] object-cover aspect-[4/5]"
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
            <p>
              Every great journey begins with a single spark of vision. Our
              story started with a simple yet powerful idea—to bring clarity,
              precision, and trust to the world of land surveying. Like the
              first ray of light breaking through the horizon, our mission was
              to illuminate the path for landowners, developers, and communities
              by providing accurate measurements, reliable data, and
              professional guidance.
            </p>
            <p>
              From humble beginnings, that vision has grown into a commitment to
              excellence. With advanced technology, skilled professionals, and
              an unwavering dedication to integrity, we transform landscapes
              into clear possibilities. Each boundary mapped, each coordinate
              measured, and each project completed represents our promise to
              deliver certainty where there was once uncertainty.
            </p>
            <p>
              Today, our journey continues to be guided by that original
              light—the belief that accurate surveying is the foundation upon
              which great structures, thriving communities, and lasting legacies
              are built. We are not just measuring land; we are shaping the
              future, one precise line at a time.
            </p>
          </div>
          <div className="pt-4">
            <button className="flex items-center gap-3 text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all uppercase tracking-widest text-sm">
              Explore Our Milestones <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection
