import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-nextkey-purple">Send Us a Message</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </CardHeader>
            <CardContent>
              <form
                name="contact"
                method="POST"
                action="/api/submit-form"
                className="space-y-6"
              >
                <input type="text" name="bot-field" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" name="firstName" placeholder="Your first name" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" name="lastName" placeholder="Your last name" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" placeholder="What is this regarding?" required />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button className="w-full bg-nextkey-purple hover:bg-purple-800 rounded-xl" size="lg">
                  {siteContent.cta.sendMessage}
                </Button>
              </form>
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
