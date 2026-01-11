"use client";

import { useState } from "react";

export default function ContactPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const contactMethods = [
    {
      id: "email",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "miruna.ndelcu@example.com",
      href: "mailto:miruna.ndelcu@example.com",
      description: "Best for detailed inquiries and professional opportunities",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "linkedin",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: "LinkedIn",
      value: "linkedin.com/in/mirunaen",
      href: "https://www.linkedin.com/in/mirunaen/",
      description: "Let's connect professionally",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-linear-to-r from-gray-900 via-gray-800 to-gray-900">
            Get in Touch
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            I'd love to hear from you! Whether you have a question, opportunity, or just want to connect.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              target={method.id === "linkedin" ? "_blank" : undefined}
              rel={method.id === "linkedin" ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredCard(method.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl bg-white p-6 md:p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-gray-100"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-linear-to-br ${method.color} text-white mb-4 md:mb-6 transition-transform duration-300 ${hoveredCard === method.id ? 'scale-110 rotate-3' : ''}`}>
                  {method.icon}
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">
                  {method.title}
                </h2>

                {/* Value */}
                <p className="text-sm md:text-base font-medium mb-2 md:mb-3 break-all" style={{ color: '#054221' }}>
                  {method.value}
                </p>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-600">
                  {method.description}
                </p>

                {/* Arrow Icon */}
                <div className="mt-4 flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                  <span className="text-xs md:text-sm font-medium mr-2">Connect</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${hoveredCard === method.id ? 'translate-x-1' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Response Time Card */}
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-linear-to-br from-gray-50 to-gray-100 p-6 md:p-8 border border-gray-200">
          <div className="relative z-10">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="shrink-0 p-2 md:p-3 rounded-xl bg-white shadow-sm">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Response Time</h2>
                <p className="text-sm md:text-base text-gray-600">
                  I typically respond within 24-48 hours during business days. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
