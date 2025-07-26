"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { colors } from "@/config/colors";

export default function SponsorsPage() {
  const sponsors = {
    gold: [
      {
        name: "Zero Motorcycles",
        description: "Leading the way in electric motorcycle innovation.",
        logo: "zero-motorcycles-wordmark-white.png",
        website: "https://www.zeromotorcycles.com/"
      },
      {
        name: "UC Santa Cruz",
        description: "Primary support for facilities, equipment, and mentorship.",
        logo: "Slugworks-logo.png",
        website: "https://www.ucsc.edu/"
      },
      {
        name: "Tesla",
        description: "Providing advanced components and technical expertise.",
        logo: "tesla-red-logo.png",
        website: "https://www.tesla.com/"
      }
    ],
    silver: [
      {
        name: "Community Partner 1",
        description: "Supporting our mission with materials and resources",
        logo: "community-partner-1.png",
        website: "#"
      },
      {
        name: "Community Partner 2", 
        description: "Enabling innovation through strategic partnerships",
        logo: "community-partner-2.png",
        website: "#"
      }
    ],
    bronze: [
      {
        name: "Local Business 1",
        description: "Contributing to our racing success",
        logo: "local-business-1.png",
        website: "#"
      },
      {
        name: "Local Business 2",
        description: "Supporting student engineering excellence",
        logo: "local-business-2.png",
        website: "#"
      },
      {
        name: "Local Business 3",
        description: "Investing in the future of electric racing",
        logo: "local-business-3.png",
        website: "#"
      }
    ]
  };

  const SponsorCard = ({ sponsor, tier }: { sponsor: any, tier: string }) => (
    <div 
      className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 bg-transparent"
    >
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-center w-full h-32 mb-4">
          <Image
            src={`/sponsors/${sponsor.logo}`}
            alt={`${sponsor.name} logo`}
            width={180}
            height={120}
            className="object-contain max-w-full max-h-full"
            style={{ display: 'block' }}
            onError={(e) => {
              // Fallback to initials if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.parentElement?.querySelector('.fallback-text');
              if (fallback) {
                (fallback as HTMLElement).style.display = 'flex';
              }
            }}
          />
          <div 
            className="fallback-text w-full h-full items-center justify-center text-4xl font-bold hidden"
            style={{ color: colors.primary, display: 'none' }}
          >
            {sponsor.name.charAt(0)}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-base font-semibold mb-1" style={{ color: colors.textColor }}>
          {sponsor.name}
        </h3>
        <p className="text-xs mb-0" style={{ color: colors.gray[400] }}>
          {sponsor.description}
        </p>
        {sponsor.website !== "#" && (
          <a 
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline mt-1 inline-block"
            style={{ color: colors.primary }}
          >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );

  const SponsorTier = ({ title, sponsors, color }: { title: string, sponsors: any[], color: string }) => (
    <div className="mb-12">
      <h2 
        className="text-3xl font-bold text-center mb-8"
        style={{ color }}
      >
        {title} Sponsors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} tier={title.toLowerCase()} />
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto p-0 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="max-w-6xl mx-auto">
          <h1 
            className="text-4xl sm:text-6xl font-bold text-center mb-8 px-4 pt-8"
            style={{
              color: "white"
            }}
          >
            Our Sponsors
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl mb-4" style={{ color: colors.textColor }}>
              Thank you to our amazing sponsors who make Formula Slug possible!
            </p>
            <p className="text-lg" style={{ color: colors.gray[300] }}>
              Your support drives innovation, excellence, and the future of electric racing at UC Santa Cruz.
            </p>
          </div>

          {/* Sponsor Tiers */}
          <div className="space-y-16">
            
            <SponsorTier 
              title="Gold" 
              sponsors={sponsors.gold}
              color={colors.secondary}
            />
            
            <SponsorTier 
              title="Silver" 
              sponsors={sponsors.silver}
              color={colors.gray[400]}
            />
            
            <SponsorTier 
              title="Bronze" 
              sponsors={sponsors.bronze}
              color={colors.gray[500]}
            />
          </div>

          {/* Become a Sponsor Section */}
          <div 
            className="mt-20 p-8 rounded-lg text-center"
            style={{ backgroundColor: colors.background.secondary }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textColor }}>
              Become a Sponsor
            </h2>
            <p className="text-lg mb-6" style={{ color: colors.gray[300] }}>
              Join our mission to push the boundaries of electric vehicle technology and support the next generation of engineers.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-xl">🚗</span>
                </div>
                <h3 className="font-semibold mb-2">Innovation</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Support cutting-edge electric vehicle development
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-xl">🎓</span>
                </div>
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Invest in hands-on STEM education
                </p>
              </div>
              <div className="text-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-xl">🏆</span>
                </div>
                <h3 className="font-semibold mb-2">Competition</h3>
                <p className="text-sm" style={{ color: colors.gray[400] }}>
                  Help us compete at the highest level
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="px-8 py-3 rounded-md font-semibold transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.primary, color: colors.textColor }}
              >
                Contact Us About Sponsorship
              </a>
              <a 
                href="mailto:formulaslug@ucsc.edu"
                className="px-8 py-3 rounded-md font-semibold border-2 transition-colors duration-200 hover:opacity-90"
                style={{ 
                  borderColor: colors.primary, 
                  color: colors.primary,
                  backgroundColor: 'transparent'
                }}
              >
                Email Us Directly
              </a>
            </div>
          </div>

          {/* Sponsorship Benefits */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ color: colors.textColor }}>
              Sponsorship Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Brand Visibility", description: "Logo placement on car, website, and materials" },
                { title: "Networking", description: "Connect with engineering students and faculty" },
                { title: "Recruitment", description: "Access to talented engineering graduates" },
                { title: "Influence", description: "Get your tools or services in front of numerous future engineers" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: colors.background.secondary }}
                >
                  <h3 className="font-semibold mb-3" style={{ color: colors.textColor }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.gray[300] }}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
