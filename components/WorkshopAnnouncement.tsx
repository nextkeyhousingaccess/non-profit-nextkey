import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeuKMSApcT2D05SlJoj8Kwq7azvPmk0VFwdabK5C8B-UjmZ1g/viewform";
const flyerUrl = "/images/housing-education-workshop-november-18-2026.jpeg";

export function WorkshopAnnouncement() {
  return (
    <section
      id="november-18-workshop"
      aria-labelledby="workshop-announcement-heading"
      className="scroll-mt-24 bg-nextkey-light-purple/40 py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-nextkey-purple">
            Upcoming community event
          </p>
          <h2 id="workshop-announcement-heading" className="mb-3 text-3xl font-bold text-nextkey-purple sm:text-4xl">
            Housing Education Workshop
          </h2>
          <p className="mb-5 text-xl font-semibold text-gray-800">Using NextKey Academy</p>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Join New York City Council Member Ty Hankerson in collaboration with NextKey Housing Access Foundation
            for a housing education workshop for tenants and landlords.
          </p>
          <dl className="mb-6 space-y-4 text-gray-800">
            <div className="flex items-start gap-3">
              <Calendar aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-nextkey-purple" />
              <div><dt className="font-semibold">When</dt><dd><time dateTime="2026-11-18">Wednesday, November 18, 2026</time></dd></div>
            </div>
            <div className="flex items-start gap-3">
              <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-nextkey-purple" />
              <div><dt className="font-semibold">Time</dt><dd>5:00 PM–7:00 PM EST</dd></div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-nextkey-purple" />
              <div><dt className="font-semibold">Where</dt><dd>Thomas White Foundation<br />162-04 Tukegee Airmen Way<br />Jamaica, NY 11433</dd></div>
            </div>
          </dl>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            <li>Learn about your rights and responsibilities.</li>
            <li>Get practical guidance and resources.</li>
            <li>Ask questions and get expert information.</li>
          </ul>
          <p className="mb-4 font-semibold text-nextkey-purple">For both tenants and landlords. Limited spots available.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="rounded-xl bg-nextkey-purple text-white hover:bg-purple-800" asChild>
              <a href={registrationUrl}>Register for the Workshop</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-xl border-nextkey-purple bg-white text-nextkey-purple" asChild>
              <a href={flyerUrl} target="_blank" rel="noopener noreferrer">View Full Flyer<span className="sr-only"> (opens in a new tab)</span></a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Registration is for the workshop and an Academy access request, not a housing application or a guarantee of housing assistance.
          </p>
        </div>
        <a href={flyerUrl} target="_blank" rel="noopener noreferrer" className="mx-auto block w-full max-w-lg rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-nextkey-purple">
          <Image
            src={flyerUrl}
            alt="Housing Education Workshop using NextKey Academy, with Council Member Ty Hankerson and NextKey Housing Access Foundation. November 18, 2026, 5–7 PM EST at Thomas White Foundation in Jamaica. Full event details and registration link are alongside this flyer. Open full-size flyer in a new tab."
            width={1206}
            height={1549}
            className="h-auto w-full rounded-xl border border-purple-100 shadow-lg"
          />
        </a>
      </div>
    </section>
  );
}
