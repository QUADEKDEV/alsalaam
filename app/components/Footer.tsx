import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white py-12 px-2 border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-serif font-bold text-slate-900">
          Al-Salaam Geo-Mapping Surveying Ltd
          <span className="text-amber-500">.</span>
        </div>
        <p className="text-slate-500 text-sm">
          {new Date().getFullYear()} Al-Salaam Geo-Mapping Surveying Ltd.|
          <a>Developed by KADEK Multiservices Ltd.</a>
        </p>
        <div className="flex gap-6 text-slate-400">
          <a href="#" className="hover:text-slate-900">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-900">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer
