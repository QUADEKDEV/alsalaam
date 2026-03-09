"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <div className="py-5 lg:px-20 px-5 flex justify-between bg-slate-900 text-white fixed top-0 z-[100] w-full items-center">
      {/* Logo */}
      <div className="flex gap-3 items-center">
        <Image
          src="https://res.cloudinary.com/def3ghl5u/image/upload/v1773063814/logo_l1xn1j.png"
          alt="Logo"
          width={70}
          height={80}
          className="rounded-full border-2 border-black"
        />
        <div className="text-[#EB9D0E] text-2xl leading-5">
          AL-SALAAM
          <br />
          <span className="text-white text-[16px]">
            Geo-mapping surveying Ltd.
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`p-3 hover:text-[#EB9D0E] transition-all duration-300 ${
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
      <div className="hidden md:flex items-center gap-2 ">
        <div className="p-3 rounded-full bg-[#EB9D0E] text-black">
          <Phone size={28} />
        </div>
        <div>
          Call us any time
          <br />
          <span className="text-[#EB9D0E] font-sans">+234 81 200 7603</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
