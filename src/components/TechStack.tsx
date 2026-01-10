"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Logo = {
  src: string;
  alt: string;
};

type Group = {
  title: string;
  logos: Logo[];
};

const GROUPS: Group[] = [
  {
    title: "🔧 CRM & Automation",
    logos: [
      { src: "/assets/logos/hubspot.webp", alt: "HubSpot" },
      { src: "/assets/logos/salesforce.webp", alt: "Salesforce" },
      { src: "/assets/logos/SalesLove.webp", alt: "Apollo" },
      { src: "/assets/logos/zapier.webp", alt: "Zapier" },
      { src: "/assets/logos/GMass.webp", alt: "GMass" },
    ],
  },
  {
    title: "📣 Marketing & Campaign Tools",
    logos: [
      { src: "/assets/logos/chimp.webp", alt: "Mailchimp" },
      { src: "/assets/logos/hootsuite.webp", alt: "Hootsuite" },
      { src: "/assets/logos/luma.webp", alt: "Luma" },
      { src: "/assets/logos/meta.webp", alt: "Meta Ads" },
      { src: "/assets/logos/Brevo.webp", alt: "Brevo" },
    ],
  },
  {
    title: "✍️ Content & Design",
    logos: [
      { src: "/assets/logos/canva.webp", alt: "Canva" },
      { src: "/assets/logos/miro.webp", alt: "Miro" },
      { src: "/assets/logos/notion.webp", alt: "Notion" },
      { src: "/assets/logos/Gsuite.webp", alt: "Google Workspace" },
    ],
  },
  {
    title: "📊 Analytics & SEO",
    logos: [
      { src: "/assets/logos/image.webp", alt: "Google Analytics" },
      { src: "/assets/logos/googleAds.webp", alt: "Google Ads" },
      { src: "/assets/logos/vidIQ.webp", alt: "vidIQ" },
      { src: "/assets/logos/ahrefs.webp", alt: "Ahrefs" },
      { src: "/assets/logos/LinkedIn.webp", alt: "LinkedIn" },
    ],
  },
  {
    title: "🧩 Collaboration & Project Management",
    logos: [
      { src: "/assets/logos/slack.webp", alt: "Slack" },
      { src: "/assets/logos/meets.webp", alt: "Microsoft Teams" },
      { src: "/assets/logos/googleSheets.webp", alt: "Google Sheets" },
      { src: "/assets/logos/trello_logo.webp", alt: "Trello" },
    ],
  },
];

function TechStackCard({ group, index }: { group: Group; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group rounded-2xl bg-white p-8 shadow-sm transition-all duration-700 hover:shadow-xl hover:scale-[1.02] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="mb-6 text-xl font-semibold text-gray-800">{group.title}</h3>

      <div className="flex flex-wrap gap-4 items-center justify-center min-h-[100px]">
        {group.logos.map((logo, logoIndex) => (
          <div
            key={logo.src}
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            style={{ transitionDelay: `${logoIndex * 50}ms` }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={32}
              className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="mb-16">
      <h2 className="mb-10 text-3xl font-bold text-center">Tools & Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GROUPS.map((group, index) => (
          <TechStackCard key={group.title} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
