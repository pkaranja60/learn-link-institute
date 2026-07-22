import { ArrowUpDown, Check } from "lucide-react";
import { SectionHeading } from "@/shared";
import { UpcomingCourseCard } from "./upcoming-course-card";

export function UpcomingCourses() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionHeading
        align="center"
        className="mb-12"
        eyebrow="Featured Training"
        title="Upcoming Training Courses/Workshops"
      />

      <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col gap-8 lg:col-span-5">
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
              <UpcomingCourseCard
                countdownText="9 Days 14:08:04 Time Left"
                dateDayEnd="31"
                dateDayStart="20"
                dateMonth="Jul"
                isLive
                location="Online Training"
                title="TRAINING COURSE ON DATA ANALYTICS WITH ADVANCED EXCEL"
              />
              <UpcomingCourseCard
                dateDayEnd="31"
                dateDayStart="27"
                dateMonth="Jul"
                location="Online Training"
                title="LEADERSHIP AND PEOPLE MANAGEMENT TRAINING"
              />
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900 text-lg uppercase tracking-wide">
              August
            </h3>

            <div className="flex flex-col gap-4">
              <UpcomingCourseCard
                dateDayEnd="28"
                dateDayStart="24"
                dateMonth="Aug"
                location="Perk Group Africa Training Center – Nairobi, Kenya"
                title="CHILD PROTECTION AND SAFEGUARDING TRAINING"
              />
            </div>
          </div>
        </div>

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
            workplaces.
          </p>

          <h4 className="mb-3 font-bold text-base text-gray-900">Why Join?</h4>
          <ul className="mb-6 flex flex-col gap-2.5">
            {[
              "Gain practical, job-relevant skills",
              "Learn from expert instructors in an interactive setting",
              "Access comprehensive training materials and case studies",
              "Network with professionals from across Africa",
              "Receive an internationally recognized Certificate of Completion",
            ].map((text) => (
              <li className="flex items-start gap-2.5" key={text}>
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded border border-emerald-500 bg-emerald-50 font-bold text-emerald-600 text-xs">
                  <Check className="size-3.5 stroke-3" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <h4 className="mb-3 font-bold text-base text-gray-900">
            Key Information:
          </h4>
          <ul className="mb-6 ml-5 flex list-disc flex-col gap-2 text-gray-700">
            <li>
              <span className="font-semibold">Group Discounts:</span> Available
              for 3+ participants.
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
            Registration & Contact
          </h4>
          <p className="text-gray-700">
            Contact us at <span className="font-medium">+254 712 028 449</span>{" "}
            or{" "}
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
