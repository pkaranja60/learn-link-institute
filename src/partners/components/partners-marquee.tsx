"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const PARTNER_LOGOS = [
  {
    name: "Malteser International",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Malteser_International_logo.svg/512px-Malteser_International_logo.svg.png",
  },
  {
    name: "Plan International",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Plan_International_logo.svg/512px-Plan_International_logo.svg.png",
  },
  {
    name: "GIZ",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/GIZ-Logo.svg/512px-GIZ-Logo.svg.png",
  },
  {
    name: "Save the Children",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Save_the_Children_logo.svg/512px-Save_the_Children_logo.svg.png",
  },
  {
    name: "IRC",
    src: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/International_Rescue_Committee_Logo.svg/512px-International_Rescue_Committee_Logo.svg.png",
  },
  {
    name: "UNICEF",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/UNICEF_Logo.svg/512px-UNICEF_Logo.svg.png",
  },
];

export function PartnersMarquee() {
  return (
    <div className="w-full py-12">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="font-semibold text-[var(--color-orange)] text-sm uppercase tracking-wider underline underline-offset-4">
          Clientele
        </span>
        <h2 className="mt-2 font-bold text-3xl text-[var(--color-navy)] sm:text-4xl">
          Our Partners
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Marquee
          autoFill
          gradient={true}
          gradientColor="white"
          gradientWidth={100}
          speed={40}
        >
          <div className="flex gap-16 pr-16 md:gap-24 md:pr-24">
            {PARTNER_LOGOS.map((logo, idx) => (
              <div
                className="relative flex h-20 w-32 items-center justify-center grayscale transition-all hover:grayscale-0 md:w-48"
                // biome-ignore lint/suspicious/noArrayIndexKey: Static partner logos
                key={idx}
              >
                <Image
                  alt={logo.name}
                  className="object-contain"
                  fill
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
