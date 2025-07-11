"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { colors } from "@/config/colors";

export default function Home() {
  const title = "FORMULA SLUG";
  const subtitle = "NEVER HAS THERE BEEN A FASTER SLUG";

  const [subtitleActive, setSubtitleActive] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  // Configurable delays
  const fallInDelay = 0.02; 
  const shadowPopDelay = 0; 

  useEffect(() => {
    setTitleVisible(true);
    // Trigger subtitle animation after half the main title's fall-in duration
    const subtitleTimeout = setTimeout(() => setSubtitleActive(true), ((title.length - 1) * fallInDelay * 1000 + 1000) / 2);
    return () => {
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
        '--gradient-to': colors.gradientTo,
        padding: '0px',
      } as React.CSSProperties}
    >
      <div style={{ height: '100vh', width: '100%' }} className="relative flex flex-col items-center justify-between">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: -2 }}
          >
            <source src="/videos/FSDynamicWallpaper.mp4" type="video/mp4" />
          </video>
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: `linear-gradient(to bottom right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`,
              opacity: 0.7,
              zIndex: -1
            }}
          />
        </div>
        <Navbar />
        <h1
          className="w-full text-4xl sm:text-5xl md:text-6xl mt-32 lg:text-9xl font-bold drop-shadow-lg flex flex-wrap justify-center mb-2 max-w-full break-words"
          style={{
            color: 'var(--text-color)',
            opacity: titleVisible ? 1 : 0,
            transition: 'opacity 0.1s linear',
          }}
        >
          {title.split('').map((char, index) => (
            <span
              key={index}
              className={char === ' ' ? 'inline-block w-4 sm:w-8' : ''}
              style={{
                display: char === ' ' ? 'inline-block' : 'inline',
                animation: `fall-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both ${index * fallInDelay}s, shadow-pop 1.0s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards ${(index * fallInDelay) + 1.0}s`,
                animationFillMode: 'both',
                minWidth: char === ' ' ? '0.25em' : undefined,
                letterSpacing: '0.03em'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        <h2 className="mt-1 text-2xl font-semibold text-center tracking-widest" style={{ color: 'var(--text-color)', opacity: subtitleActive ? 0.85 : 0, transition: 'opacity 0.2s linear' }}>
          {subtitle.split('').map((char, index) => (
            <span
              key={index}
              className={char === ' ' ? 'inline-block' : ''}
              style={subtitleActive ? {
                display: char === ' ' ? 'inline-block' : 'inline',
                animation: `fall-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both ${index * 0.02}s, shadow-pop 1.0s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards ${(index * 0.02) + 0.5}s`,
                animationFillMode: 'both',
                minWidth: char === ' ' ? '0.5em' : undefined
              } : { display: char === ' ' ? 'inline-block' : 'inline', minWidth: char === ' ' ? '0.5em' : undefined }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        {/* Content below hero/video section */}
        <div className="flex w-1/2 max-w-6xl mt-20 items-center justify-between gap-12">
          <div className="flex-1 flex items-center">
            <p className="text-lg w-3/4" style={{ color: 'var(--text-color)', opacity: 0.85 }}>
        Formula Slug is the student-run FSAE electric team at UC Santa Cruz. Building complex high-performance race cars we push the boundaries of innovation and teamwork.
            </p>
            <button
              className="ml-6 px-6 py-2 rounded-full text-white font-semibold shadow transition-colors duration-200"
              style={{ 
                backgroundColor: colors.electricBlue,
                border: `2px solid ${colors.slugYellow}`,
              }}
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              /* this is terrible */
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = colors.slugYellow;
                e.currentTarget.style.color = colors.electricBlue;
                e.currentTarget.style.border = `2px solid ${colors.electricBlue}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = colors.electricBlue;
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.border = `2px solid ${colors.slugYellow}`;
              }}
            >
              Read More
            </button>
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
              Ready to build, race, and innovate? Whether you’re an engineer, designer, or just a passionate creator, Formula Slug welcomes all UCSC students. Click the button to join our Slack and get started!
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-color)', opacity: 0.65 }}>
              This group is open to all students consistent with state and federal law, the UC Nondiscrimination Statement and the Nondiscrimination Policy Statement for University of California Publications Regarding Student-Related Matters.
              </p>
          </div>
        </div>
      </div>
      <div className="flex w-screen h-64 z-0" style={{ position: 'absolute', top: '100vh', left: 0 }}>

            {/* Bug: 
        I cannot for the life of me fix the electrical fade in to not stutter on the first use
        I swapped from the color.ts variable to static color
        I swapped from css styling to tailwind
        the last fix I think might be to compress the image
        I swapped images and the html renders differently? What is going on
        compressing 90% did not change the transition time
        
        Need to return and add links to take mech and electrical to team page
        -- use anchors
        */}
        <div className="flex-1 h-full flex flex-col items-center justify-center relative group" 
        style={{ backgroundImage: 'url(/photos/upright.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        <div
            className="absolute inset-0 transition-opacity duration-300 opacity-60 group-hover:opacity-0 bg-[#111827]"
          />
          <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Mechanical</h3>
        </div>
        <div className="flex-1 h-full flex flex-col items-center justify-center relative group"
         style={{ backgroundImage: 'url(/photos/VicHotworkOpt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
         >
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-60 group-hover:opacity-0 bg-[#111827]"
          />
          <h3 className="text-3xl font-bold mb-4 text-white relative z-10">Electrical</h3>
        </div>
        
      </div>



      <section className="w-full max-w-4xl mx-auto mt-32 mb-16 px-4 py-10 bg-[#181c2a] bg-opacity-90 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-300 mb-4">About Us</h2>
        <p className="text-lg text-gray-100 mb-4 text-center max-w-2xl">
          Formula Slug is UC Santa Cruz's premier student-run electric vehicle team, competing in the international Formula SAE Electric competition. Our multidisciplinary team of engineers, designers, and innovators is dedicated to building high-performance electric race cars from the ground up. We foster hands-on learning, technical excellence, and a collaborative spirit, empowering students to push the boundaries of automotive technology and sustainable transportation.
        </p>
        <p className="text-base text-gray-300 text-center max-w-2xl">
          Whether you're passionate about mechanical design, electrical systems, software, business, or just want to be part of an ambitious and supportive community, Formula Slug welcomes all Banana Slugs ready to make an impact. Join us as we race toward the future!
        </p>
      </section>
      
      
      
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
          60% {
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
        .animate-fall-in {
          animation: fall-in .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .shadow-pop-now {
          animation: shadow-pop 1.0s cubic-bezier(0.12, 0.25, 0.3, 0.5) forwards !important;
        }
        .subtitle-fade-in {
          animation: none;
        }
            `}</style>
    </main>
  );
}
