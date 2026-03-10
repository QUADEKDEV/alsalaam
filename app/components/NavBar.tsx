"use client";
import { Phone,X,Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <div>
      <div className="py-5 lg:px-10 px-5 flex justify-between bg-slate-900 text-white fixed top-0 z-[100] w-full items-center">
        {/* Logo */}
        <div className="flex gap-3 items-center">
          <Image
            src="https://res.cloudinary.com/def3ghl5u/image/upload/v1773063814/logo_l1xn1j.png"
            alt="Logo"
            width={70}
            height={80}
            className="rounded-full border-2 border-black"
          />
          <div className="text-[#EB9D0E] text-xl leading-5">
            AL-SALAAM
            <br />
            <span className="text-white text-[16px]">
              Geo-mapping surveying Ltd.
            </span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-3 lg:gap-6 items-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`p-1 hover:text-[#EB9D0E] transition-all duration-300 ${
                    pathname === link.path
                      ? "underline underline-offset-8 decoration-[#EB9D0E] text-[#EB9D0E]"
                      : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* Contact */}
        <div className="hidden items-center gap-1 lg:flex">
          <div className="p-3 rounded-full bg-[#EB9D0E] text-white">
            <Phone size={28} />
          </div>
          <div>
            Call us any time
            <br />
            <span className="text-[#EB9D0E] font-sans">+234 81 200 7603</span>
          </div>
        </div>
        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed lg:hidden bg-white border-t mt-24 z-50 w-full"
          >
            <div className="flex flex-col p-6 space-y-4 text-slate-900 font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </div>
            
             
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
