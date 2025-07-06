"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { colors } from "@/config/colors";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen text-white" style={{ backgroundColor: colors.background.primary }}>
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl font-bold text-center mb-12"
            style={{
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Contact Us
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="mb-6" style={{ color: colors.gray[300] }}>
                  Ready to join Formula Slug or have questions about our team? We'd love to hear from you!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="text-xs">📧</span>
                  </div>
                  <span>formulaslug@ucsc.edu</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="text-xs">📍</span>
                  </div>
                  <span>UC Santa Cruz, Santa Cruz, CA</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <span className="text-xs">💬</span>
                  </div>
                  <a 
                    href="https://fsae.slack.com/join/signup#/domain-signup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: colors.primary }}
                  >
                    Join our Slack
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: colors.background.secondary }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: colors.background.card,
                      borderColor: colors.gray[600],
                      color: colors.textColor
                    }}
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: colors.background.card,
                      borderColor: colors.gray[600],
                      color: colors.textColor
                    }}
                    placeholder="your.email@ucsc.edu"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: colors.background.card,
                      borderColor: colors.gray[600],
                      color: colors.textColor
                    }}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:border-transparent resize-vertical"
                    style={{ 
                      backgroundColor: colors.background.card,
                      borderColor: colors.gray[600],
                      color: colors.textColor
                    }}
                    placeholder="Tell us more about your inquiry, we'd love to hear from you!"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: colors.blue[600]
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.blue[700];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.blue[600];
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
