"use client";

import Image from "next/image";

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

export function TechStack() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-3xl font-bold text-center">Tools & Skills</h2>

      {GROUPS.map((group) => (
        <div key={group.title} className="mb-10">
          <h3 className="mb-4 text-lg font-semibold text-gray-700">{group.title}</h3>

          <div className="flex flex-wrap gap-6 items-center">
            {group.logos.map((logo) => (
              <Image
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
