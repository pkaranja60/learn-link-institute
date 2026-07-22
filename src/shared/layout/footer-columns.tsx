import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// The TestimonialCarousel will be created in the testimonials domain
import { TestimonialCarousel } from "@/testimonials";

export function FooterColumns() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
      {/* Column 1: Accreditation Partners */}
      <div>
        <h3 className="mb-6 font-bold text-lg text-white uppercase tracking-wider">
          ACCREDITATION PARTNERS
        </h3>
        <div className="flex flex-col gap-6">
          <div className="relative flex items-center justify-start rounded">
            <Image
              alt="NITA Logo"
              className="object-contain"
              height={80}
              src="/images/nita.png"
              width={200}
            />
          </div>
          <div className="relative flex items-center justify-start rounded">
            <Image
              alt="PECB Logo"
              className="bg-white object-contain px-2 py-1"
              height={80}
              src="/images/pecb.png"
              width={200}
            />
          </div>
        </div>
      </div>

      {/* Column 2: Recent Posts */}
      <div>
        <h3 className="mb-6 font-bold text-lg text-white uppercase tracking-wider">
          RECENT POSTS
        </h3>
        <div className="flex flex-col gap-6">
          <Link className="group flex gap-4 hover:opacity-80" href="#">
            <div className="relative size-16 shrink-0 bg-gray-800">
              <Image
                alt="Classroom vs Online"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=150&auto=format&fit=crop"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm text-white transition-colors group-hover:text-(--color-orange)">
                Classroom or Online Training — Which One Is Right for You?
              </h4>
              <p className="mt-1 text-gray-400 text-xs">February 26, 2024</p>
            </div>
          </Link>
          <Link className="group flex gap-4 hover:opacity-80" href="#">
            <div className="relative size-16 shrink-0 bg-gray-800">
              <Image
                alt="Gender Equality"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=150&auto=format&fit=crop"
              />
            </div>
            <div>
              <h4 className="font-medium text-sm text-white transition-colors group-hover:text-(--color-orange)">
                Gender Equality and Social Inclusion: A Cornerstone for
                Sustainable Development
              </h4>
              <p className="mt-1 text-gray-400 text-xs">October 23, 2023</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Column 3: Testimonials / Reviews */}
      <div>
        <h3 className="mb-6 font-bold text-lg text-white uppercase tracking-wider">
          TESTIMONIALS / REVIEWS
        </h3>
        <TestimonialCarousel />
      </div>

      {/* Column 4: Contact Us */}
      <div>
        <h3 className="mb-6 font-bold text-lg text-white uppercase tracking-wider">
          CONTACT US
        </h3>
        <ul className="flex flex-col gap-4 text-gray-300 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-(--color-orange)" />
            <span>
              Kigali Business Center, 3F
              <br />
              Kikuyu Town, Nairobi - Kenya
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="size-5 shrink-0 text-(--color-orange)" />
            <span>Phone: (+254) 712 028 449</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="size-5 shrink-0 text-(--color-orange)" />
            <span>Email: info@perk-gafrica.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
