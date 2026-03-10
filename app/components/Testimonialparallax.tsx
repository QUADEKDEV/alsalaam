import React from "react";
import Testimonial from "./Testimonial";
import Image from "next/image";
import { Phone } from "lucide-react";

const Testimonialparallax = () => {
  return (
    <section className="relative h-[80vh] flex  justify-center flex-wrap">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628155849837-648cf206ec31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmQlMjBzdXJ2ZXlpbmd8ZW58MHx8MHx8fDA%3D')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}

      <div className="relative z-10 text-center text-white w-full mt-20">
        <Testimonial />
      </div>
      <div className="border-5 relative lg:absolute -bottom-18 text-white bg-[#F3F3F3]  flex  w-full lg:w-2/3">
        <img
          src="https://images.unsplash.com/photo-1545186070-de624ed19875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VydmV5b3J8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-full md:w-1/2"
        />
        <div className="text-black p-5 text-2xl font-medium">
          <p className="text-amber-500 leading-2">
            Simple. Fast. No obligation.
          </p>

          <h1 className="text-4xl md:text-5xl font-bold  my-8">
            Start with Accurate Data. Build with Confidence
          </h1>
          <p className="max-w-xl mx-auto text-lg ">
            We deliver precise land insights to support smart, successful
            development Request
          </p>
          <button className="group bg-amber-500 text-white px-8 py-4 rounded-2xl font-medium text-lg hover:bg-amber-600 transition-all flex items-center gap-2 my-3 ">
            <Phone className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Request a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonialparallax;
