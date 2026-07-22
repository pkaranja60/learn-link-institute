import { Gem, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative flex h-25 w-full flex-col items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            alt="About us background"
            className="object-cover"
            fill
            priority
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-bold text-4xl">About us</h1>
          <p className="mt-3 font-semibold text-xs uppercase tracking-widest">
            HOME / ABOUT US
          </p>
        </div>
      </section>

      {/* About PGA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Image and Socials */}
          <div className="flex flex-col">
            <div className="relative h-100 w-full overflow-hidden bg-gray-100 shadow-sm">
              <Image
                alt="Perk Group Africa Team"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              />
            </div>
            <div className="mt-6 flex items-center justify-between border-gray-200 border-t pt-4">
              <span className="font-serif text-gray-500 text-sm italic">
                Follow Us
              </span>
              <div className="flex items-center gap-3 text-gray-400">
                <Link
                  aria-label="Facebook"
                  className="hover:text-gray-600"
                  href="#"
                >
                  <FacebookIcon className="size-4" />
                </Link>
                <Link
                  aria-label="Twitter"
                  className="hover:text-gray-600"
                  href="#"
                >
                  <TwitterIcon className="size-4" />
                </Link>
                <Link
                  aria-label="LinkedIn"
                  className="hover:text-gray-600"
                  href="#"
                >
                  <LinkedinIcon className="size-4" />
                </Link>
                <Link
                  aria-label="Instagram"
                  className="hover:text-gray-600"
                  href="#"
                >
                  <InstagramIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col text-gray-700">
            <span className="font-semibold text-(--color-orange) text-xs uppercase tracking-wider">
              YOUR TRAINING PARTNER
            </span>
            <h2 className="mt-2 font-bold text-(--color-navy) text-3xl">
              About Perk Group Africa(PGA)
            </h2>

            <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed">
              <p>
                Perk Group Africa (PGA) is a leading capacity development and
                consultancy center based in Nairobi, Kenya, dedicated to
                empowering professionals and organizations across Africa. We
                provide practical solutions that help individuals enhance their
                careers and enable institutions to strengthen their performance
                and impact.
              </p>
              <p>
                Our areas of expertise include Socio-economic Research, Spatial
                Technologies, Climate Change & Environmental Sustainability,
                Gender Equality & Social Inclusion, Data Management &
                Statistics, Project Cycle Management, Enterprise Development,
                Governance, Organizational Development, and Personal
                Productivity.
              </p>
              <p>
                With a strong tradition of excellence, PGA draws on a pool of
                highly experienced and motivated consultants—recognized industry
                leaders who bring both technical expertise and real-world
                insights.
              </p>
              <p>
                At the heart of our mission is a commitment to creating value
                for society: every training, research project, or consultancy we
                deliver is designed to build skills, improve systems, and drive
                sustainable development across communities and organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Intro text */}
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-sky-800 text-xs uppercase tracking-widest">
                SOME WORDS ABOUT US
              </span>
              <h3 className="mt-3 font-bold text-(--color-navy) text-3xl leading-tight">
                Well-tailored courses to meet everyone needs.
              </h3>
            </div>

            {/* Mission */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-white shadow-sm">
                <Target className="size-10 text-(--color-orange)" />
              </div>
              <h4 className="font-bold text-(--color-navy) text-lg">
                Our Mission
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                To develop sustainable human capital across the globe
              </p>
            </div>

            {/* Vision */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-white shadow-sm">
                <Lightbulb className="size-10 text-(--color-orange)" />
              </div>
              <h4 className="font-bold text-(--color-navy) text-lg">
                Our Vision
              </h4>
              <p className="mt-2 text-gray-600 text-sm">
                To become a center of excellence in emerging technologies
              </p>
            </div>

            {/* Core Values */}
            <div className="flex flex-col items-center lg:items-start lg:text-left">
              <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-white shadow-sm">
                <Gem className="size-10 text-(--color-orange)" />
              </div>
              <h4 className="font-bold text-(--color-navy) text-lg">
                Our Core Values
              </h4>
              <ul className="mt-3 flex flex-col gap-1.5 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-gray-400" />
                  Teamwork
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-gray-400" />
                  Integrity
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-gray-400" />
                  Innovation
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-gray-400" />
                  Accountability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products and Services Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center">
          <h2 className="border-gray-300 border-b-2 pb-2 font-bold text-(--color-navy) text-2xl">
            Products and Services
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Training Card */}
          <div className="flex flex-col border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 font-bold text-(--color-navy) text-xl">
              Training
            </h3>
            <div className="flex flex-col gap-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Training is one of the activities that resonate well with our
                mantra at PGA, where we desire to bring change by sharing
                knowledge. Being our flagship engagement, we are constantly
                introducing new on-demand courses to our database. Our course
                offering comprises short courses with durations spanning a few
                days to several weeks.
              </p>
              <p>
                The courses are delivered in the form of seminars, and workshops
                conducted onsite (in-person), online (virtual), or at the
                client&apos;s premises (In-house). Our accredited and certified
                courses are delivered by qualified professionals with vast
                experience in their subject areas.
              </p>
            </div>

            <div className="mt-8 pt-6">
              <h4 className="mb-4 font-bold text-(--color-navy) text-md">
                Accreditation Partners
              </h4>
              <div className="flex items-center gap-6">
                <div className="font-bold text-3xl text-red-700 tracking-tighter">
                  PECB
                </div>
                <div className="flex flex-col items-center text-sky-900">
                  <span className="font-black text-3xl tracking-tight">
                    NITA
                  </span>
                  <span className="font-semibold text-[8px] leading-tight">
                    NATIONAL INDUSTRIAL TRAINING AUTHORITY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Consultancy Card */}
          <div className="flex flex-col border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 font-bold text-(--color-navy) text-xl">
              Consultancy
            </h3>
            <div className="flex flex-col gap-4 text-gray-700 text-sm leading-relaxed">
              <p>
                PGA offers professional consultancy and expert advice in various
                spheres of organizational development, capacity-building
                facilitation, advocacy, project cycle management, and community
                mobilization.
              </p>

              <p>
                Our domain of influence in this field includes and is not
                limited to;
              </p>

              <ul className="ml-2 flex flex-col gap-1.5">
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Preparation of Proposals and Operational frameworks.
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Conducting project evaluations
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Drafting policy documents and guidelines
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Project Designs
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Developing Concepts
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Innovations
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Implementation frameworks
                </li>
                <li className="flex items-center gap-2">
                  <div className="size-1.5 shrink-0 rounded-full bg-gray-800" />
                  Monitoring and evaluation frameworks
                </li>
              </ul>

              <p className="mt-2">
                We also undertake knowledge-based research works such as
                Feasibility Studies, Baseline Surveys, Mid Term, and End Term
                Evaluations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
