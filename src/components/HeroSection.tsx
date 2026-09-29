import React from 'react';
import Image from 'next/image';
import { Search, ShoppingBag, User, BookOpen, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-brand-blue text-white overflow-hidden font-sans">
      
      {/* Background Grid Lines Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />



      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 text-[#ccff00] -rotate-12">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 w-16 h-16 text-white rotate-45">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,10 90,90 10,90" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-24 h-24 text-white">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="15">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-10 w-20 h-20 text-[#ccff00] rotate-45">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
        </svg>
      </div>

      {/* Hero Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 pt-12 lg:pt-20 text-center flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight leading-[1.1] max-w-3xl">
          Get Access to Hundreds<br />Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base text-white/90 max-w-xl font-medium">
          Unlock your creativity with skill-based courses and grow your professional skills with industry-expert instructors.
        </p>

        {/* Search Bar */}
        <div className="mt-10 w-full max-w-lg bg-white p-2 rounded-full shadow-2xl flex items-center">
          <div className="pl-4 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            placeholder="Search course..." 
            className="w-full px-3 py-2 text-gray-800 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base font-medium"
          />
          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-blue-900 font-bold px-8 py-3 rounded-full transition-all text-sm sm:text-base flex-shrink-0">
            Search
          </button>
        </div>

        {/* Hero Visual & Floating Cards Section */}
        <div className="relative w-full max-w-4xl h-[400px] sm:h-[480px] flex justify-center items-end">
          
          {/* Lime Green Backdrop Circle */}
          <div className="absolute bottom-[-330] w-[350px] h-[350px] sm:w-[700px] sm:h-[700px] bg-[#ccff00] rounded-full z-0" />

          {/* Person Illustration / Image */}
          <div className="relative z-10 w-72 sm:w-96 h-full flex items-end justify-center">
            <Image 
              src="/29a52a24e51266edcd7d57d73392ee5fc4833220.png" 
              alt="Student"
              width={400}
              height={480}
              className="object-contain object-bottom w-full h-full drop-shadow-2xl"
              priority
            />
          </div>

          {/* Floating Card 1: UI/UX Design */}
          <div className="absolute left-4 sm:left-40 top-50 z-20 bg-white text-gray-900 p-3 rounded-xl shadow-2xl flex items-center gap-3 w-52 text-left">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <span className="text-lg">UI</span>
            </div>
            <div>
              <p className="text-sm font-bold">UI/UX Design</p>
              <p className="text-[10px] text-gray-500 font-medium">8hr, 120s • 35k Views</p>
            </div>
          </div>

          {/* Floating Card 2: Success Rate */}
          <div className="absolute right-4 sm:right-28 top-40 z-20 bg-white text-gray-900 p-4 rounded-xl shadow-2xl w-48 text-left">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-gray-500">Success Rate:</span>
            </div>
            <div className="text-3xl font-black text-gray-900 tracking-tight">55%</div>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#ccff00] h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students */}
          <div className="absolute left-8 sm:left-24 bottom-10 z-20 bg-white text-gray-900 p-3 rounded-xl shadow-2xl w-48 text-left">
            <p className="text-xs font-bold mb-1">Happy Students</p>
            <p className="text-[10px] text-gray-500 mb-2">Join over 15k+ students</p>
            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white" />
              </div>
              <span className="text-[10px] font-bold bg-[#ccff00] text-gray-900 px-2 py-1 rounded">15k+</span>
            </div>
          </div>

        </div>



     

      </main>
    </div>
  );
}