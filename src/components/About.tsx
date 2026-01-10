"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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

  const observer = useMemo(
    () =>
      new IntersectionObserver(
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
      ),
    []
  );

  useEffect(() => () => observer.disconnect(), [observer]);

  const setNode = (index: number) => (el: HTMLDivElement | null) => {
    nodes.current[index] = el;
    if (el) observer.observe(el);
  };

  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-4xl">

        <section className="pb-20">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold text-center">Career Journey</h2>
            <p className="mb-12 text-xl text-gray-700 text-center italic font-light max-w-3xl mx-auto">
              My journey has been hands-on and full-funnel, from launching products
              and crafting messaging to running campaigns across paid, organic,
              email, and events.
            </p>

            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-12">
                {TIMELINE.map((item, index) => {
                  const right = index % 2 === 1;
                  const show = visible.has(index);

                  return (
                    <div
                      key={item.id}
                      ref={setNode(index)}
                      className={[
                        "relative flex flex-col md:flex-row md:items-center md:gap-8 transition-all duration-700 will-change-transform",
                        right ? "md:flex-row-reverse" : "",
                        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                      ].join(" ")}
                    >
                      <div className="absolute left-8 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-lg md:left-1/2" />

                      <div
                        className={[
                          "ml-20 flex-1 md:ml-0",
                          right ? "md:pl-12" : "md:pr-12",
                        ].join(" ")}
                      >
                        <div className="rounded-2xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                          <div className="mb-4 flex items-center gap-4">
                            <div
                              className={[
                                "relative h-16 w-24 flex-shrink-0 rounded-lg p-2",
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
                              <h3 className="text-xl font-bold">{item.role}</h3>
                              <p className="text-sm font-semibold text-blue-600">
                                {item.company}
                              </p>
                            </div>
                          </div>

                          <p className="mb-3 text-sm font-medium text-gray-600">
                            {item.period}
                          </p>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>

                      {/* Image on the opposite side */}
                      <div
                        className={[
                          "mt-4 flex-1 md:mt-0 flex justify-center",
                          right ? "md:pr-12" : "md:pl-12",
                        ].join(" ")}
                      >
                        {item.image && (
                          <div className="relative h-56 w-4/5 overflow-hidden rounded-2xl shadow-xl">
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
