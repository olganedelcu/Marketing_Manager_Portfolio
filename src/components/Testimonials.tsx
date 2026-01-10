"use client";

import Image from "next/image";

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
      name: "Gerardo Pérez González",
      connection: "1st",
      title: "Senior Digital Marketing Manager with expertise in Performance Marketing, HubSpot, Semrush, Web Analytics, and SEO",
    },
    date: "January 24, 2023",
    relationship: "Gerardo worked with Miruna but on different teams",
    text: "I had the privilege of working with Miruna at NinjaOne and I can confidently say that she is a top-performing professional in her field. Miruna is a dedicated and results-driven individual who consistently demonstrates a high level of expertise in Sales and Marketing. She has a unique ability to think critically and creatively, which enables her to come up with innovative solutions to complex problems. Additionally, Miruna is a strong communicator and team player, making her an invaluable asset to any organization. I highly recommend Miruna for any opportunity and I am confident she will continue to excel in her future endeavors.",
    image: "/assets/gerardo.webp",
  },
];

export function Testimonials() {
  return (
    <div className="container mx-auto px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-center">Kind Words</h1>
        <p className="mb-12 text-xl text-gray-700 text-center italic font-light max-w-3xl mx-auto">
          Recommendations from colleagues and managers I've had the privilege to work with.
        </p>

        <div className="space-y-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {testimonial.author.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {testimonial.relationship} • {testimonial.date}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
