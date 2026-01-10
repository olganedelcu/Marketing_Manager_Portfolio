"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  author: {
    name: string;
    connection: string;
    title: string;
  };
  date: string;
  relationship: string;
  text: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    author: {
      name: "Sofia Vasileva",
      connection: "1st",
      title: "Product Marketing Manager at Elastic",
    },
    date: "January 31, 2024",
    relationship: "Sofia managed Miruna directly",
    text: "Miruna stands out as a highly motivated and invaluable asset to any marketing team. Her ability to execute tasks efficiently and accurately showcases her professional aptitude. She is quick to learn and always eager to improve her skills and the processes she's involved in. What truly sets Miruna apart, however, is her remarkable sense of humor, which greatly contributes to a positive and collaborative team atmosphere. This quality is especially vital in marketing, where creativity and teamwork are key. Additionally, Miruna demonstrates a keen understanding of market trends and consumer behavior, adapting her strategies effectively to meet changing market needs. Her dynamic approach and resourcefulness make her an exceptional marketing specialist.",
    image: "/assets/sofia.webp",
  },
  {
    author: {
      name: "Elina Aleynikova",
      connection: "1st",
      title: "Lead Product UX/UI Designer",
    },
    date: "June 13, 2024",
    relationship: "Elina was Miruna's client",
    text: "I am thrilled to recommend Miruna for her outstanding expertise in marketing and LinkedIn strategy. She has been instrumental in helping me navigate and optimize my LinkedIn presence. Miruna consistently generates innovative ideas for posts, crafts effective strategies, and provides invaluable advice and thorough reviews of my content.\n\nOne of the things I appreciate most about working with Miruna is the freedom she gives me to express my individuality while ensuring my content remains impactful and engaging. Her readiness to help and her professional insights have made a significant difference in my journey. I am truly grateful to have such a dedicated and talented partner in this challenging endeavor.",
    image: "/assets/elina.webp",
  },
  {
    author: {
      name: "Maria Gallifa Samaniego",
      connection: "2nd",
      title: "Talent Acquisition Manager at Mistral AI",
    },
    date: "May 13, 2024",
    relationship: "Maria worked with Miruna but on different teams",
    text: "Any team would be lucky to have Miruna onboard. She is extremely hard-working and adaptable. She proved in her first few weeks at Jina to be a smart quick learner, but most importantly willing to contribute as much as she could.\n\nTo summarise Miruna in a sentence: Not afraid of challenges, she will get things done!",
    image: "/assets/maria.webp",
  },
  {
    author: {
      name: "Gerardo Pérez González",
      connection: "1st",
      title: "Senior Digital Marketing Manager with expertise in Performance Marketing, HubSpot, Semrush, Web Analytics, and SEO",
    },
    date: "January 24, 2023",
    relationship: "Gerardo worked with Miruna but on different teams",
    text: "I had the privilege of working with Miruna at NinjaOne and I can confidently say that she is a top-performing professional in her field. Miruna is a dedicated and results-driven individual who consistently demonstrates a high level of expertise in Sales and Marketing. She has a unique ability to think critically and creatively, which enables her to come up with innovative solutions to complex problems. Additionally, Miruna is a strong communicator and team player, making her an invaluable asset to any organization. I highly recommend Miruna for any opportunity and I am confident she will continue to excel in her future endeavors.",
    image: "/assets/gerardo.webp",
  },
  {
    author: {
      name: "Priyanka Shankar",
      connection: "2nd",
      title: "Founder & Mentor | Passionate about businesses making the world a better place",
    },
    date: "October 30, 2023",
    relationship: "Priyanka was Miruna's mentor",
    text: "I have had the pleasure of mentoring Miruna on different occasions, and I can confidently say that she is one of the most passionate and dynamic marketers I've ever met. In every interaction, her enthusiasm for the field and meticulous attention to detail is evident.\n\nWhat sets Miruna apart is her remarkable sense of leadership and ownership that she injects into every project she undertakes. This is a quality that's not just valuable but essential for a marketer in any startup environment. Miruna's ability to take charge, drive projects to success, and think outside a specified task is commendable.\n\nI've witnessed firsthand her dedication, professionalism, and unwavering commitment to achieving exceptional results. She consistently goes above and beyond, and her contributions have a tangible, positive impact on any team or project she's a part of.\n\nI'm excited to see how Miruna continues to grow and I'm confident that she will excel at any endeavour. I can't recommend her enough.",
    image: "/assets/priyanka.webp",
  },
  {
    author: {
      name: "Aabhishek Rastogi",
      connection: "2nd",
      title: "Managing Partner – Jayvar Inc | ISO 9001:2015 Certified | Freelancer | Handicraft Sourcing & Quality Assurance Expert",
    },
    date: "June 26, 2023",
    relationship: "Aabhishek was Miruna's client",
    text: "Miruna is an exceptionally kind and friendly professional who gets on with all of her peers whilst delivering the best results. I have worked with Miruna for an extended period of time on a number of projects – she has never failed to be available, share her feedback, provide exceptional candidate experience and journey.\n\nMiruna has always been highly regarded by her team as a result of transparent and trustworthy team spirit. I would not hesitate to recommend Miruna to any employer. I wish her all the best for her future endeavors and would be extremely delighted to work with her for future opportunities.",
    image: "/assets/abi.webp",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
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
      className={`rounded-xl bg-white p-6 shadow-md transition-all duration-700 hover:shadow-lg ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={testimonial.author.name}
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {testimonial.author.name}
            </h3>
            <p className="text-sm text-gray-600 mt-0.5">
              {testimonial.author.title}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">
              {testimonial.relationship} • {testimonial.date}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed italic font-light text-[15px]">
            {testimonial.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">Kind Words</h1>
        <p className="mb-10 text-xl text-gray-700 text-center italic font-light max-w-3xl mx-auto">
          Recommendations from colleagues and managers I've had the privilege to work with.
        </p>

        <div className="space-y-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.author.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}
