import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { siteContent } from "@/lib/content";
import { footer } from "@/app/content/site";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">{siteContent.pages.contact.title}</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {siteContent.pages.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-nextkey-purple">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-nextkey-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a className="text-gray-600 underline" href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
                    <p className="text-sm text-gray-500 mt-1">For Foundation education, workshops, volunteering, and donations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Facebook className="h-6 w-6 text-nextkey-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Facebook</h3>
                    <a className="text-gray-600 underline" href={siteContent.contact.social.facebookUrl} target="_blank" rel="noopener noreferrer">{siteContent.contact.social.facebook}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-nextkey-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                    <a className="text-gray-600 underline" href={siteContent.contact.social.instagramUrl} target="_blank" rel="noopener noreferrer">{siteContent.contact.social.instagram}</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-nextkey-purple mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-sm text-gray-500 mt-1">Serving families throughout the community</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">{siteContent.contact.officeHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">{siteContent.contact.officeHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">{siteContent.contact.officeHours.sunday}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">{siteContent.contact.emergencyNote}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-nextkey-purple">Choose Your Next Step</CardTitle>
              <p className="text-gray-600">Contact the Foundation about education, workshops, or community partnerships.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Housing education and workshop questions</h3>
                <p className="text-gray-600 mb-3">Tell us whether you want to attend a workshop or host one for your community. We will confirm availability and next steps.</p>
                <Button asChild className="bg-nextkey-purple hover:bg-purple-800 rounded-xl"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdIBofYigT9RyeWjW9OlbtW8BfZnBwlKAXdFAE96H-J52AlGA/viewform" target="_blank" rel="noopener noreferrer">Free Workshop Interest Form</a></Button>
                <p className="text-sm text-gray-600 mt-2">Prefer email? <a className="underline" href="mailto:info@nextkeyhousingaccess.org?subject=Housing%20education%20and%20workshop%20inquiry">Contact info@nextkeyhousingaccess.org</a>. Please do not include identity documents or voucher paperwork.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Nonprofit and community partners</h3>
                <p className="text-gray-600 mb-3">Schools, organizations, professionals, and community partners can introduce themselves using our existing interest form.</p>
                <Button asChild variant="outline"><a href={siteContent.links.partnerForm} target="_blank" rel="noopener noreferrer">Open Partner Interest Form</a></Button>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Workshop updates by email</h3>
                <p className="text-gray-600 mb-3">Choose to receive Foundation updates. Sending a partnership inquiry does not subscribe you automatically.</p>
                <Button asChild variant="outline"><a href="/get-involved#newsletter">Join the Foundation Newsletter</a></Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-sm text-gray-600">
          <p>For organizational consulting inquiries, contact the separate business NextKey Global Solutions LLC at <a className="text-nextkey-purple underline" href="mailto:partnership@nextkeyglobal.com">partnership@nextkeyglobal.com</a>.</p>
          <p className="mt-2">The Foundation provides housing education and resources; it does not offer real estate brokerage services.</p>
        </div>
      </div>
    </div>
  );
}
