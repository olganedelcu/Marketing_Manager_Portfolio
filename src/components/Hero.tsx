import Image from "next/image";

export function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-8 mb-6">
          <div
            className="relative w-32 h-32 flex-shrink-0 group"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* front miru's pic */}
              <div
                className="absolute w-full h-full rounded-full overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/miruna_pic.jpeg"
                  alt="Miruna Nedelcu"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* back mirror's pic */}
              <div
                className="absolute w-full h-full rounded-full overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Image
                  src="/miruna_pic.jpeg"
                  alt="Miruna Nedelcu"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full scale-x-[-1]"
                  priority
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">Hey, I'm Miruna.</h1>
            <p className="text-lg text-gray-700">
              I build full-funnel marketing systems that turn cold leads into loyal
              users — especially in B2B SaaS & AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
