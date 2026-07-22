import { SectionHeading } from "@/shared";
import { Stats } from "./stats";

export function AboutSummary() {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-20 sm:px-6 lg:flex-row lg:px-8">
      {/* Left side: Stats */}
      <Stats />

      {/* Right side: About Text */}
      <div className="flex flex-1 flex-col justify-start py-2">
        <SectionHeading
          align="center"
          className="mb-6"
          eyebrow="About Us"
          title="Perk Group Africa"
        />

        <div className="flex flex-col gap-4 text-start text-gray-800 text-sm">
          <p>
            Perk Group Africa (PGA) is a leading capacity development and
            consultancy center based in Nairobi, Kenya, dedicated to empowering
            professionals and organizations across Africa. We provide practical
            solutions that help individuals enhance their careers and enable
            institutions to strengthen their performance and impact.
          </p>
          <p>
            Our areas of expertise include Socio-economic Research, Spatial
            Technologies, Climate Change & Environmental Sustainability, Gender
            Equality & Social Inclusion, Data Management & Statistics, Project
            Cycle Management, Enterprise Development, Governance, Organizational
            Development, and Personal Productivity.
          </p>
        </div>
      </div>
    </section>
  );
}
