"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  id: string;
  company: string;
  logo: string;
  role: string;
  period: string;
  description: string;
  image?: string;
};

const TIMELINE: TimelineItem[] = [
  {
    id: "jobsties",
    company: "Jobsties",
    logo: "/assets/jobsties.webp",
    role: "Marketing Manager",
    period: "2024 - 2026",
    description:
      "Owned and executed full-funnel B2B demand generation across paid, organic, email, and webinars among others",
    image: "/assets/marketingGeeks.webp",
  },
  {
    id: "jina-ai",
    company: "Jina AI",
    logo: "/assets/jina_logo.webp",
    role: "Marketing Specialist",
    period: "2023 - 2024",
    description:
      "Led full-funnel B2B growth marketing across paid, organic, email, events, and influencer campaigns",
    image: "/assets/jinateam.webp",
  },
  {
    id: "ninja",
    company: "NinjaOne",
    logo: "/assets/ninja_logo.webp",
    role: "Sales Representative",
    period: "2022 - 2023",
    description:
      "Consistently hit 120%+ of monthly targets by optimizing outbound cadences, improving ICP alignment, and improving lead quality in Salesforce and Salesloft.",
    image: "/assets/ninja2.webp",
  },
  {
    id: "theseniordev",
    company: "theSeniorDev",
    logo: "/assets/theseniordev_logo.webp",
    role: "Junior Marketing Manager",
    period: "2021 - 2022",
    description:
      "Built a full-funnel organic engine from scratch, growing LinkedIn by 20K, going viral, and generating the first inbound leads and product sales.",
    image: "/assets/seniordev.webp",
  },
];

export function About() {
  const [visible, setVisible] = useState<Set<number>>(() => new Set());
  const nodes = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // extra safety guard for weird build envs
    if (typeof window === "undefined") return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          let next: Set<number> | null = null;

          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            const idx = nodes.current.indexOf(entry.target as HTMLDivElement);
            if (idx < 0 || prev.has(idx)) continue;

            next ??= new Set(prev);
            next.add(idx);
          }

          return next ?? prev;
        });
      },
      { threshold: 0.3 }
    );

    // observe whatever is mounted right now
    for (const el of nodes.current) {
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  const setNode = (index: number) => (el: HTMLDivElement | null) => {
    nodes.current[index] = el;
    if (el && observerRef.current) observerRef.current.observe(el);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-6 md:py-12">
      <div className="max-w-4xl">
        <section className="pb-10 md:pb-20">
          <div className="max-w-4xl">
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center">Career Journey</h2>
            <p className="mb-8 md:mb-12 text-base md:text-lg lg:text-xl text-gray-700 text-center italic font-light max-w-3xl mx-auto px-4">
              My journey has been hands-on and full-funnel, from launching products
              and crafting messaging to running campaigns across paid, organic,
              email, and events.
            </p>

            <div className="relative">
              <div className="absolute left-6 md:left-8 top-0 h-full w-0.5 bg-linear-to-b from-gray-300 via-gray-400 to-gray-300 lg:left-1/2 lg:-translate-x-1/2" />

              <div className="space-y-8 md:space-y-12">
                {TIMELINE.map((item, index) => {
                  const right = index % 2 === 1;
                  const show = visible.has(index);

                  return (
                    <div
                      key={item.id}
                      ref={setNode(index)}
                      className={[
                        "relative flex flex-col lg:flex-row lg:items-center lg:gap-8 transition-all duration-700 will-change-transform",
                        right ? "lg:flex-row-reverse" : "",
                        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                      ].join(" ")}
                    >
                      <div className="absolute left-6 md:left-8 top-6 z-10 h-3 w-3 md:h-4 md:w-4 -translate-x-1/2 rounded-full border-2 md:border-4 border-white bg-blue-600 shadow-lg lg:left-1/2" />

                      <div
                        className={[
                          "ml-12 md:ml-20 flex-1 lg:ml-0",
                          right ? "lg:pl-12" : "lg:pr-12",
                        ].join(" ")}
                      >
                        <div className="rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                          <div className="mb-3 md:mb-4 flex items-center gap-3 md:gap-4">
                            <div
                              className={[
                                "relative h-12 w-16 md:h-16 md:w-24 shrink-0 rounded-lg p-1.5 md:p-2",
                                item.id === "theseniordev" ? "bg-gray-900" : "",
                              ].join(" ")}
                            >
                              <Image
                                src={item.logo}
                                alt={`${item.company} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>

                            <div>
                              <h3 className="text-base md:text-lg lg:text-xl font-bold leading-tight">{item.role}</h3>
                              <p className="text-xs md:text-sm font-semibold text-blue-600">{item.company}</p>
                            </div>
                          </div>

                          <p className="mb-2 md:mb-3 text-xs md:text-sm font-medium text-gray-600">{item.period}</p>
                          <p className="text-sm md:text-base text-gray-700">{item.description}</p>
                        </div>
                      </div>

                      <div
                        className={[
                          "mt-3 md:mt-4 flex-1 lg:mt-0 flex justify-center ml-12 md:ml-20 lg:ml-0",
                          right ? "lg:pr-12" : "lg:pl-12",
                        ].join(" ")}
                      >
                        {item.image && (
                          <div className="relative h-40 md:h-48 lg:h-56 w-full md:w-4/5 overflow-hidden rounded-xl md:rounded-2xl shadow-xl">
                            <Image
                              src={item.image}
                              alt={`${item.company} team`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
