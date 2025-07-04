"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const title = "FORMULA SLUG";
  const subtitle = "NEVER HAS THERE BEEN A FASTER SLUG";
  
  // Color configuration - change these to update the entire theme
  const colors = {
    shadowColor1: '#49b3e6',        // Shadow color
    shadowColor2: '#f1ea2d',        // Shadow color (for compatibility)
    textColor: 'rgb(255, 255, 255)',    // Text color
    gradientFrom: '#141624',  // Blue-500
    gradientVia: '#141624',   // Purple-500
    gradientTo: '#141624'     // Pink-500
  };

  const [shadowActive, setShadowActive] = useState(false);
  const [subtitleActive, setSubtitleActive] = useState(false);

  // Configurable delays
  const fallInDelay = 0.02; // seconds per letter
  const shadowPopDelay = 0; // seconds after last letter falls in

  useEffect(() => {
    // Wait for the last letter's animation to finish, then trigger shadow
    const timeout = setTimeout(() => setShadowActive(true), (title.length - 1) * fallInDelay * 1000 + 1000 + shadowPopDelay * 1000);
    // Trigger subtitle animation after half the main title's fall-in duration
    const subtitleTimeout = setTimeout(() => setSubtitleActive(true), ((title.length - 1) * fallInDelay * 1000 + 1000) / 2);
    return () => {
      clearTimeout(timeout);
      clearTimeout(subtitleTimeout);
    };
  }, []);
  
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:p-12 lg:p-24 overflow-hidden"
      style={{
        '--shadow-color2': colors.shadowColor2,
        '--shadow-color': colors.shadowColor1,
        '--text-color': colors.textColor,
        '--gradient-from': colors.gradientFrom,
        '--gradient-via': colors.gradientVia,
        '--gradient-to': colors.gradientTo
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 -z-10 w-full h-full" style={{
        background: `linear-gradient(to bottom right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`
      }}>
      </div>
      <Navbar />
      <h1 className="w-full text-4xl sm:text-7xl lg:text-9xl font-bold drop-shadow-lg flex flex-wrap justify-center mb-2 max-w-full break-words" style={{ color: 'var(--text-color)' }}>
        {title.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block animate-fall-in${shadowActive ? ' shadow-pop-now' : ''} ${char === ' ' ? 'w-4 sm:w-8' : ''}`}
            style={{
              animationDelay: `${index * fallInDelay}s`, // Only fall-in is staggered
              animationFillMode: 'both'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
      <h2
        className={`mt-1 text-2xl font-semibold text-center tracking-widest${subtitleActive ? ' subtitle-fade-in' : ''}`}
        style={{
          color: 'var(--text-color)',
          opacity: subtitleActive ? 0.85 : 0,
          transition: 'opacity 0.2s linear'
        }}
      >
        {subtitle}
      </h2>
      <div className="flex w-full max-w-6xl mt-20 items-center justify-between gap-12">
        <div className="flex-1">
          <p className="text-lg" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
            Formula Slug is the student-run FSAE electric team at UC Santa Cruz. Building complex high-performance race cars we push the boundaries of innovation and teamwork.
          </p>
          <button
            className="mt-6 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition-colors duration-200"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Read More
          </button>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src="/car.png"
            alt="Formula Slug Car"
            width={480}
            height={320}
            className="rounded-lg shadow-lg object-contain"
            style={{ background: '#222', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      <div className="flex w-screen h-64 mt-20 z-0" style={{ marginTop: 'calc(5rem + 4rem + 4rem)' }}>
        <div className="w-1/2 h-full flex flex-col items-center justify-center" style={{ background: '#2d3748' }}>
          <h3 className="text-3xl font-bold mb-4 text-white">Mechanical</h3>
          <Image
        src="/mechanical.png"
        alt="Mechanical"
        width={120}
        height={120}
        className="object-contain"
        style={{ background: '#222', borderRadius: '0.5rem' }}
          />
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-center" style={{ background: '#f6ad55' }}>
          <h3 className="text-3xl font-bold mb-4 text-white">Electrical</h3>
          <Image
        src="/electrical.png"
        alt="Electrical"
        width={120}
        height={120}
        className="object-contain"
        style={{ background: '#222', borderRadius: '0.5rem' }}
          />
        </div>
      </div>
      
      <div className="flex w-full max-w-6xl mt-20 items-center justify-between gap-12">
        <div className="flex-1 flex flex-col items-center justify-center">
            <button
              className="px-0 py-0 border-4 border-white bg-transparent text-white text-3xl font-bold shadow-lg transition-colors duration-200 hover:bg-white hover:text-yellow-400"
              style={{
              width: '220px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '0'
              }}
              onClick={() => window.open('https://fsae.slack.com/join/signup#/domain-signup', '_blank')}
            >
              Join Our Slack
            </button>
        </div>
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
            Join the Team
          </h3>
            <p className="text-lg" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
            Ready to build, race, and innovate? Whether you’re an engineer, designer, or just passionate about electric vehicles, Formula Slug welcomes all UCSC students. Click the button to join our Slack and get started!
            </p>
            <p className="text-xs mt-2" style={{ color: 'var(--text-color)', opacity: 0.65 }}>
            This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters.
            </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fall-in {
          0% {
            transform: translateX(110vw) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateX(5px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }
        @keyframes shadow-pop {
          0% {
            text-shadow: none;
          }
          70% {
            text-shadow:
              1px -1px 0px var(--shadow-color),
              1.5px -1.5px 0px var(--shadow-color),
              2px -2px 0px var(--shadow-color),
              2.5px -2.5px 0px var(--shadow-color),
              3px -3px 0px var(--shadow-color),
              3.5px -3.5px 0px var(--shadow-color),
              4px -4px 0px var(--shadow-color2),
              4.5px -4.5px 0px var(--shadow-color2),
              5px -5px 0px var(--shadow-color2),
              5.5px -5.5px 0px var(--shadow-color2),
              6px -6px 0px rgb(0,0,0);
          }
          100% {
            text-shadow: none;
          }
        }
        @keyframes subtitle-fade-in {
          0% {
            opacity: 0;
            transform: translateX(-100vw);
            text-shadow: none;
          }
          30% {
            opacity: 1;
            transform: translateX(-5px);
            text-shadow:
              0px 0px 0px var(--shadow-color),
              0px 0px 0px var(--shadow-color2),
              0px 0px 0px rgb(0,0,0);
          }
          60% {
            opacity: 1;
            transform: translateX(0);

          }
          80% {
            opacity: 1;
            transform: translateX(0);
              text-shadow:
              1px -1px 0px var(--shadow-color),
              2px -2px 0px var(--shadow-color),
              3px -3px 0px var(--shadow-color2),
              4px -4px 0px var(--shadow-color2),
              5px -5px 0px rgb(0,0,0);}
          100% {
            opacity: 1;
            transform: translateX(0);
            text-shadow: none;
          }
        }
        .animate-fall-in {
          animation: fall-in .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .shadow-pop-now {
          animation: shadow-pop 1.0s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards !important;
          animation-delay: 0s !important;
        }
        .subtitle-fade-in {
          animation: subtitle-fade-in 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
            `}</style>
    </main>
  );
}
