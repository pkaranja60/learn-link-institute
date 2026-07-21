import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function UpcomingCourses() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col items-center text-center">
        <span className="font-semibold text-[var(--color-orange)] text-sm uppercase tracking-wider underline underline-offset-4">
          Featured Training
        </span>
        <h2 className="mt-2 font-bold text-3xl text-[var(--color-navy)] sm:text-4xl">
          Upcoming Training Courses/Workshops
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Timeline list of courses */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="mb-4 font-bold text-gray-900 text-xl uppercase">
              July
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex overflow-hidden rounded-md bg-[var(--color-lightblue)] shadow-sm">
                <div className="flex shrink-0 flex-col items-center justify-center bg-[var(--color-navy)]/10 px-6 py-4 text-white">
                  <span className="font-bold text-2xl leading-none">20</span>
                  <span className="font-medium text-sm opacity-80">- 31</span>
                  <span className="mt-1 font-semibold text-sm uppercase">
                    Jul
                  </span>
                </div>
                <div className="flex flex-col justify-center p-4">
                  <span className="mb-2 w-fit rounded bg-[var(--color-orange)] px-2 py-0.5 font-bold text-white text-xs">
                    FEATURED
                  </span>
                  <h4 className="font-bold text-lg text-white leading-tight">
                    TRAINING COURSE ON DATA ANALYTICS WITH ADVANCED EXCEL
                  </h4>
                  <span className="mt-2 font-medium text-sm text-white/90">
                    📍 Online Training
                  </span>
                </div>
              </div>

              <div className="flex overflow-hidden rounded-md bg-[var(--color-lightblue)] shadow-sm">
                <div className="flex shrink-0 flex-col items-center justify-center bg-[var(--color-navy)]/10 px-6 py-4 text-white">
                  <span className="font-bold text-2xl leading-none">27</span>
                  <span className="font-medium text-sm opacity-80">- 31</span>
                  <span className="mt-1 font-semibold text-sm uppercase">
                    Jul
                  </span>
                </div>
                <div className="flex flex-col justify-center p-4">
                  <span className="mb-2 w-fit rounded bg-[var(--color-orange)] px-2 py-0.5 font-bold text-white text-xs">
                    FEATURED
                  </span>
                  <h4 className="font-bold text-lg text-white leading-tight">
                    LEADERSHIP AND PEOPLE MANAGEMENT TRAINING
                  </h4>
                  <span className="mt-2 font-medium text-sm text-white/90">
                    📍 Online Training
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900 text-xl uppercase">
              August
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex overflow-hidden rounded-md bg-[var(--color-lightblue)] shadow-sm">
                <div className="flex shrink-0 flex-col items-center justify-center bg-[var(--color-navy)]/10 px-6 py-4 text-white">
                  <span className="font-bold text-2xl leading-none">24</span>
                  <span className="font-medium text-sm opacity-80">- 28</span>
                  <span className="mt-1 font-semibold text-sm uppercase">
                    Aug
                  </span>
                </div>
                <div className="flex flex-col justify-center p-4">
                  <span className="mb-2 w-fit rounded bg-[var(--color-orange)] px-2 py-0.5 font-bold text-white text-xs">
                    FEATURED
                  </span>
                  <h4 className="font-bold text-lg text-white leading-tight">
                    CHILD PROTECTION AND SAFEGUARDING TRAINING
                  </h4>
                  <span className="mt-2 font-medium text-sm text-white/90">
                    📍 Nairobi, Kenya
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information text */}
        <div className="flex flex-col text-gray-700">
          <p className="mb-6 leading-relaxed">
            Join us for our upcoming capacity-building training programs in
            Nairobi, Kenya, and Kigali, Rwanda. Our trainings are designed to
            strengthen professional competencies, enhance organizational
            performance, and drive meaningful change across communities in
            Africa.
          </p>
          <p className="mb-6 leading-relaxed">
            Through interactive, hands-on learning, participants gain practical
            tools and knowledge that can be directly applied in their
            workplaces. Our experienced facilitators use a participatory
            training methodology combining presentations, case studies, group
            discussions, and real-life simulations to ensure impactful learning
            experiences.
          </p>

          <h4 className="mb-4 font-bold text-gray-900">Why Join?</h4>
          <ul className="mb-8 flex flex-col gap-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#25D366]" />
              <span>Gain practical, job-relevant skills</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#25D366]" />
              <span>
                Learn from expert instructors in an interactive, hands-on
                setting
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#25D366]" />
              <span>
                Access comprehensive training materials and real-life case
                studies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#25D366]" />
              <span>
                Receive an internationally recognized Certificate of Completion
              </span>
            </li>
          </ul>

          <h4 className="mb-4 font-bold text-gray-900">Key Information:</h4>
          <ul className="mb-8 ml-5 flex list-disc flex-col gap-2">
            <li>
              Group Discounts available for organizations registering 3+
              participants.
            </li>
            <li>Language: English.</li>
            <li>Certification Provided upon completion.</li>
          </ul>

          <h4 className="mb-2 font-bold text-gray-900">Registration</h4>
          <p className="mb-4 text-[var(--color-navy)] text-sm">
            <Link className="hover:underline" href="#">
              https://perk-gafrica.com/training/registration
            </Link>
          </p>
          <p className="text-sm">
            For inquiries, contact us at +254 712 028 449 or
            training@perk-gafrica.com.
          </p>
        </div>
      </div>
    </section>
  );
}
