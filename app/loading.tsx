
export const Loading = () => {
 return (
   <div className="flex min-h-screen w-full items-center justify-center ">
     <div className="flex flex-col items-center gap-8">
       {/* Animated Rings Container */}
       <div className="relative flex items-center justify-center h-28 w-28">
         {/* Outer Glowing Ring */}
         <div className="absolute h-full w-full rounded-full border-4 border-transparent border-t-amber-500 border-b-amber-400 animate-spin shadow-[0_0_15px_rgba(245,158,11,0.6)]"></div>

         {/* Inner Ring rotating in reverse */}
         <div className="absolute h-20 w-20 rounded-full border-4 border-transparent border-l-amber-400 border-r-amber-300 animate-[spin_1.5s_linear_infinite_reverse]"></div>

         {/* Center Pulsing Core */}
         <div className="absolute h-6 w-6 rounded-full bg-amber-400 blur-[2px] animate-pulse"></div>
         <div className="h-4 w-4 rounded-full bg-white animate-ping"></div>
       </div>

       {/* Loading Text */}
       <div className="flex flex-col items-center">
         <h2 className="text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 animate-pulse">
           LOADING
         </h2>

         <p className="text-slate-500 text-sm mt-2 tracking-wider animate-pulse delay-75">
           Preparing your experience...
         </p>
       </div>
     </div>
   </div>
 );
};

export default Loading;





