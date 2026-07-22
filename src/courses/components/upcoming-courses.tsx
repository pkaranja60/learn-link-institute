import { ArrowUpDown, Check, MapPin, Radio } from "lucide-react";
import Link from "next/link";

export function UpcomingCourses() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="font-medium text-(--color-orange) text-xs uppercase tracking-wider underline underline-offset-4">
          Featured Training
        </span>
        <h2 className="mt-2 font-bold text-(--color-navy) text-xl">
          Upcoming Training Courses/Workshops
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Timeline list of courses (Narrower card side) */}
        <div className="flex flex-col gap-8 lg:col-span-5">
          {/* JULY SECTION */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <button
                aria-label="Sort courses"
                className="flex size-7 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300"
                type="button"
              >
                <ArrowUpDown className="size-4" />
              </button>
            </div>
            <h3 className="mb-4 font-bold text-gray-900 text-lg uppercase tracking-wide">
              July
            </h3>

            <div className="flex flex-col gap-4">
              {/* Course Card 1 */}
              <div className="flex flex-col rounded-xl bg-[#4db8d6] p-5 text-white shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-start gap-4">
                  {/* Left Date Block */}
                  <div className="flex shrink-0 flex-col font-bold text-white">
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-2xl leading-none">
                        20
                      </span>
                      <span className="font-semibold text-xs opacity-90">
                        -31
                      </span>
                    </div>
                    <span className="mt-0.5 font-bold text-[10px] uppercase tracking-wider opacity-80">
                      Jul
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-[var(--color-orange)] px-2 py-0.5 font-bold text-[10px] text-white uppercase tracking-wider">
                        Featured
                      </span>
                      <span className="flex items-center gap-1 font-bold text-red-500 text-xs">
                        <Radio className="size-3.5 animate-pulse" />
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-white uppercase leading-tight tracking-wide">
                      TRAINING COURSE ON DATA ANALYTICS WITH ADVANCED EXCEL
                    </h4>

                    <div className="mt-0.5 flex items-center gap-1.5 font-medium text-white/90 text-xs">
                      <MapPin className="size-3.5 shrink-0" />
                      <span>Online Training</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar countdown */}
                <div className="mt-4 border-white/20 border-t pt-2.5">
                  <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/30">
                    <div className="h-full w-2/3 rounded-full bg-white" />
                  </div>
                  <p className="mt-1.5 text-center font-medium text-[11px] text-white/90">
                    9 Days 14:08:04 Time Left
                  </p>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="flex rounded-xl bg-[#4db8d6] p-5 text-white shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex shrink-0 flex-col font-bold text-white">
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-2xl leading-none">
                        27
                      </span>
                      <span className="font-semibold text-xs opacity-90">
                        -31
                      </span>
                    </div>
                    <span className="mt-0.5 font-bold text-[10px] uppercase tracking-wider opacity-80">
                      Jul
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="w-fit rounded-full bg-[var(--color-orange)] px-2 py-0.5 font-bold text-[10px] text-white uppercase tracking-wider">
                      Featured
                    </span>

                    <h4 className="font-bold text-sm text-white uppercase leading-tight tracking-wide">
                      LEADERSHIP AND PEOPLE MANAGEMENT TRAINING
                    </h4>

                    <div className="mt-0.5 flex items-center gap-1.5 font-medium text-white/90 text-xs">
                      <MapPin className="size-3.5 shrink-0" />
                      <span>Online Training</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AUGUST SECTION */}
          <div>
            <h3 className="mb-4 font-bold text-gray-900 text-lg uppercase tracking-wide">
              August
            </h3>

            <div className="flex flex-col gap-4">
              {/* Course Card 3 */}
              <div className="flex rounded-xl bg-[#4db8d6] p-5 text-white shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex shrink-0 flex-col font-bold text-white">
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-2xl leading-none">
                        24
                      </span>
                      <span className="font-semibold text-xs opacity-90">
                        -28
                      </span>
                    </div>
                    <span className="mt-0.5 font-bold text-[10px] uppercase tracking-wider opacity-80">
                      Aug
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <span className="w-fit rounded-full bg-[var(--color-orange)] px-2 py-0.5 font-bold text-[10px] text-white uppercase tracking-wider">
                      Featured
                    </span>

                    <h4 className="font-bold text-sm text-white uppercase leading-tight tracking-wide">
                      CHILD PROTECTION AND SAFEGUARDING TRAINING
                    </h4>

                    <div className="mt-0.5 flex items-center gap-1.5 font-medium text-white/90 text-xs">
                      <MapPin className="size-3.5 shrink-0" />
                      <span>
                        Perk Group Africa Training Center – Nairobi, Kenya
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Info (Wider Text Column) */}
        <div className="flex flex-col border-gray-200 border-t pt-8 text-gray-700 text-sm leading-relaxed lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <p className="mb-4">
            Join us for our upcoming capacity-building training programs in
            Nairobi, Kenya, and Kigali, Rwanda. Our trainings are designed to
            strengthen professional competencies, enhance organizational
            performance, and drive meaningful change across communities in
            Africa.
          </p>

          <p className="mb-6">
            Through interactive, hands-on learning, participants gain practical
            tools and knowledge that can be directly applied in their
            workplaces. Our experienced facilitators use a participatory
            training methodology combining presentations, case studies, group
            discussions, and real-life simulations to ensure impactful learning
            experiences.
          </p>

          <h4 className="mb-3 font-bold text-base text-gray-900">Why Join?</h4>
          <ul className="mb-6 flex flex-col gap-2.5">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>Gain practical, job-relevant skills</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>
                Learn from expert instructors in an interactive, hands-on
                setting
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>
                Access comprehensive training materials and real-life case
                studies
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>Network with professionals from across Africa</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                <Check className="size-3.5 stroke-[3]" />
              </span>
              <span>
                Receive an internationally recognized Certificate of Completion
              </span>
            </li>
          </ul>

          <h4 className="mb-3 font-bold text-base text-gray-900">
            Key Information:
          </h4>
          <ul className="mb-6 ml-5 flex list-disc flex-col gap-2 text-gray-700">
            <li>
              <span className="font-semibold">Group Discounts:</span> Available
              for organizations registering 3+ participants.
            </li>
            <li>
              <span className="font-semibold">Language:</span> English.
            </li>
            <li>
              <span className="font-semibold">Certification:</span> Provided
              upon completion.
            </li>
          </ul>

          <h4 className="mb-2 font-bold text-base text-gray-900">
            Registration
          </h4>
          <p className="mb-4 text-gray-700">
            Rwanda:{" "}
            <Link className="text-sky-600 hover:underline" href="#">
              https://perk-gafrica.com/course/training-in-kigali
            </Link>
          </p>

          <p className="text-gray-700">
            For inquiries, contact at{" "}
            <span className="font-medium">+254 712 028 449</span> or{" "}
            <a
              className="text-sky-600 hover:underline"
              href="mailto:training@perk-gafrica.com"
            >
              training@perk-gafrica.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
