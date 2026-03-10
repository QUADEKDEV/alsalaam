"use client"
import {
  Facebook,Instagram,Twitter,} from "lucide-react";
const Footer = () => {
  return (
    <div className="bg-slate-900 py-12 px-2 border-t-4 border-slate-100 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-bold hover:text-slate-50">
          Al-Salaam Geo-Mapping Surveying Ltd
          <span className="text-amber-500">.</span>
        </div>
        <p className="text-slate-500 text-sm hover:text-slate-50">
          {new Date().getFullYear()} Al-Salaam Geo-Mapping Surveying Ltd.|
          <a href="#" className="hover:text-amber-500 transition-colors" >Developed by KADEK Multiservices Ltd.</a>
        </p>
        <div className="mt-12 flex items-center gap-6 text-slate-400">
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        {/* <div className="flex gap-6">
          <a href="#" className="hover:text-slate-50">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-50">
            Terms
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Footer
