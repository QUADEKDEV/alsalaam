"use client";
import { useState, useEffect, Suspense } from "react";
import NavBar from "./components/NavBar";
import {Star,Coffee,Calendar,Users,Check,ArrowRight,X,CreditCard,Loader2,} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ParallaxSection from "./components/Parallax";
import toast from "react-hot-toast";
import ServicesSection from "./components/Services";
import Testimonialparallax from "./components/Testimonialparallax";
import { PRODUCTS } from "./utils/data";
import { Product } from "./utils/types";
import Footer from "./components/Footer";

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden flex-wrap">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZCUyMHN1cnZleWluZyUyMEdJUyUyMGFuZCUyMG1hcHBpbmd8ZW58MHx8MHx8fDA%3D"
          className="w-full h-full object-cover brightness-[0.2]"
        />
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mt-28">
        <motion.div
          initial={{ opacity: 0, y: 30, x: -250 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="uppercase tracking-[0.3em] text-sm font-medium text-amber-400 mb-2 block">
            AL-SALAAM GEO-MAPPING SURVEYING LTD.
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2 leading-tight">
            Precision Mapping,
            <br /> Future-Proof Engineering{" "}
            {/* Redefining Luxury <br />{" "}
            & Comfort */}
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-6 font-light max-w-2xl mx-auto">
            Experience an unforgettable services, where modern equipments meets
            expected accuracy.
          </p>
          <button
            onClick={onExplore}
            className="group bg-amber-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-amber-600 transition-all flex items-center gap-2 mx-auto"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl -mt-8 z-[100]">
        <motion.div
          initial={{ opacity: 0, y: 30, x: 250 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <Image
              src="/media/survisiaq_ofo6px.png"
              alt="Srurvey Observation"
              width={600}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoomCard = ({
  room,
  onBook,
}: {
  room: Product;
  onBook: (r: Product) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-amber-600 uppercase tracking-wider">
          Premium
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-serif text-slate-900 mb-1">
              {room.name}
            </h3>
            <div className="flex items-center text-slate-500 text-sm gap-4">
              <span className="flex items-center gap-1">
                <Users size={14} /> {room.capacity}
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.map((am, i) => (
            <span
              key={i}
              className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full"
            >
              {am}
            </span>
          ))}
        </div>

        <div className="flex items-end justify-between border-t pt-6 border-slate-100">
          <div>
            <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider">
              Price
            </p>
            <p className="text-3xl font-bold text-slate-900">
              ₦{room.price.toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => onBook(room)}
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Payment Modal (Simulated Paystack) ---
const PaymentModal = ({
  room,
  isOpen,
  onClose,
}: {
  room: Product | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [step, setStep] = useState<"details" | "processing" | "success">(
    "details",
  );
  const [email, setEmail] = useState("");

  // Reset state when opening
  useEffect(() => {
    if (isOpen) setStep("details");
  }, [isOpen]);

  const handlePay = () => {
    if (!email) return;
    setStep("processing");

    // Simulate API Call to GraphQL -> Paystack
    setTimeout(() => {
      setStep("success");
    }, 2500);
  };

  if (!isOpen || !room) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden z-10"
      >
        {/* Header */}
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
          <h3 className="font-serif text-xl">
            {step === "success" ? "Booking Confirmed" : "Complete Booking"}
          </h3>
          <button
            onClick={onClose}
            className="hover:text-amber-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          {step === "details" && (
            <div className="space-y-6">
              <div className="flex gap-4">
                <img
                  src={room.image}
                  alt=""
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{room.name}</h4>
                  <p className="text-amber-600 font-bold mt-1">
                    ₦{room.price.toLocaleString()}{" "}
                    <span className="text-slate-400 font-normal text-sm">
                      /night
                    </span>
                  </p>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-2">
                    <Check size={12} className="text-green-500" /> Instant
                    Confirmation
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Check-in
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-3.5 text-slate-400"
                      />
                      <input
                        type="text"
                        value="Oct 24, 2025"
                        readOnly
                        className="w-full pl-10 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Check-out
                    </label>
                    <div className="relative">
                      <Calendar
                        size={16}
                        className="absolute left-3 top-3.5 text-slate-400"
                      />
                      <input
                        type="text"
                        value="Oct 26, 2025"
                        readOnly
                        className="w-full pl-10 px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <div>
                  <p className="text-xs text-slate-500">Total (2 nights)</p>
                  <p className="text-xl font-bold text-slate-900">
                    ₦{(room.price * 2).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={handlePay}
                  className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                >
                  Pay Securely <CreditCard size={18} />
                </button>
              </div>
            </div>
          )}

          {step === "processing" && (
            <div className="py-10 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-12 h-12 text-amber-500 animate-spin mb-6" />
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                Processing Payment
              </h4>
              <p className="text-slate-500 text-sm">
                Please wait while we connect to Paystack...
              </p>
            </div>
          )}

          {step === "success" && (
            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-2">
                You're All Set!
              </h4>
              <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8">
                Your booking for <strong>{room.name}</strong> has been
                confirmed. A receipt has been sent to {email}.
              </p>
              <button
                onClick={onClose}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800"
              >
                Close Receipt
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function Page() {
  const [selectedRoom, setSelectedRoom] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBook = (room: Product) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleScrollToRooms = () => {
    const el = document.getElementById("suites");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* <Navbar onOpenBooking={handleScrollToRooms} /> */}
      <NavBar />
      <Hero onExplore={handleScrollToRooms} />
      {/* <Testimonials/> */}

      <section id="suites" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-medium tracking-widest uppercase text-sm">
            INSTRUMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3 mb-6">
            Designed for Precision
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            Our advanced surveying instruments are designed to deliver unmatched
            precision, reliability, and efficiency in the field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <RoomCard key={product.id} room={product} onBook={handleBook} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">
              Precision Engineering & Geomatics
            </span>
            <h2 className="text-4xl font-serif font-bold mt-3 mb-6">
              Mapping the Future of Infrastructure.
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              High-fidelity land surveying, LiDAR mapping, and GIS solutions
              designed for developers, engineers, and government agencies.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <button className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-all flex items-center justify-center gap-3 group">
                Start your Survey
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                View Capabilities
              </button>
            </div>
          </div>
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://media.istockphoto.com/id/1022533074/photo/drone-for-agriculture-drone-use-for-various-fields-like-research-analysis-safety-rescue.webp?a=1&b=1&s=612x612&w=0&k=20&c=YGsvxyjA7b6jJ885A8t5_HDLa1F1NshMTAkUeRIzhQg="
              alt="Drone"
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
      <ServicesSection />
      <ParallaxSection />
      <footer className="bg-slate-900 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let’s Survey Your Next Success.
          </h2>
          <p className="text-slate-400 mb-10 text-lg">
            Download our corporate profile or schedule a consultation with our
            licensed engineers.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-l-xl bg-slate-800 border-none text-white w-full max-w-sm focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-r-xl font-bold hover:bg-blue-500 transition">
              Go
            </button>
          </div>
        </div>
      </footer>
      {/* <Testimonialparallax /> */}
      <div className="mt-12">
        <Footer />
      </div>
      {/* Logic Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <PaymentModal
            room={selectedRoom}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
