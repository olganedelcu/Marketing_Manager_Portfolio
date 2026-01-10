"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showEmoji, setShowEmoji] = useState(false);
  const fullText = "I'm Miruna";
  const typingSpeed = 150;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowEmoji(true);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-20">
      <div className="max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-6 text-6xl font-bold">
            Hey, <span className="typing-text gradient-text">{displayText}</span>
            {showEmoji && <span className="emoji"> 🧙‍♀️</span>}
            <span className="typing-cursor">{!showEmoji && '|'}</span>
          </h1>
          <p className="mb-6 text-xl text-gray-700">
            I build full-funnel marketing systems that turn cold leads into loyal
            users - especially in B2B SaaS & AI.
          </p>
        </div>

        <div className="rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg transition-all duration-700 hover:shadow-xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-center">
            <div className="flex-shrink-0">
              <Image
                src="/assets/main_pic_miru.webp"
                alt="Miruna Nedelcu"
                width={300}
                height={320}
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
            <div className="flex-1 space-y-4 text-center">
              <p className="text-xl text-gray-900">
                <strong>Marketing Manager</strong> with <strong>4+ years</strong> of experience driving growth
                marketing, demand generation, and brand strategy in B2B SaaS and
                AI-driven companies.
              </p>
              <p className="text-xl text-gray-900">
                Beyond the metrics, I genuinely <strong>love building communities</strong> that
                bring people together around great products, from growing a
                <strong> Berlin-based AI marketing meetup to 300+ members</strong> and hosting
                monthly events.
              </p>
              <p className="text-xl text-gray-900">
                I also love running, it's where I recharge and
                stay grounded.
              </p>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-block rounded-full px-12 py-4 text-lg font-bold shadow-2xl transition-all duration-300 hover:shadow-green hover:scale-105"
                  style={{ backgroundColor: '#054221', color: '#ffffff' }}
                >
                  See Experience
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-text {
          color: #054221;
        }

        .typing-cursor {
          animation: blink 1s infinite;
          color: #054221;
        }

        .shadow-green:hover {
          box-shadow: 0 20px 50px -12px rgba(5, 66, 33, 0.5), 0 0 30px rgba(5, 66, 33, 0.3);
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
