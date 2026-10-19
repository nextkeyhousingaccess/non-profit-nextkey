import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, DollarSign, Shield, Users } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function DonatePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">Support Our Mission</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your donation supports housing education, workshop materials, and community learning.
            Help us make practical housing information easier for individuals and families to understand and use.
          </p>
        </div>

        {/* Main Donation Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-nextkey-purple text-white">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-16 w-16 text-nextkey-gold" />
              </div>
              <CardTitle className="text-3xl mb-4 text-white">Support Housing Education</CardTitle>
              <p className="text-lg text-white">
                Your donation supports housing education, practical learning materials, and the development and testing
                of digital workshops for renters, families, and community partners.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                size="lg" 
                className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 text-xl px-12 py-6 rounded-xl font-bold"
                asChild
              >
                <a
                  href={siteContent.links.donationInquiry}
                >
                  Ask About Donating
                </a>
              </Button>
              <p className="text-sm text-white mt-4">
                Email the Foundation for current donation options. No payment is collected on this page.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Housing Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Your donation supports lessons and resources that explain rental assistance programs,
                application requirements, documentation, and housing processes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Workshop Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Help us develop and test digital workshops, practical exercises, and learning materials
                about tenant rights, housing applications, and preparing for next steps.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <DollarSign className="h-12 w-12 text-nextkey-purple" />
              </div>
              <CardTitle className="text-xl text-nextkey-purple">Community Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Support outreach and school and community partnerships that bring housing education
                to more learners. Workshop availability and scope are confirmed with each partner.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Legal Information */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-nextkey-purple mb-4">Tax Information</h2>
          <p className="text-gray-700 mb-4">
            {siteContent.legal.donations}
          </p>
          <p className="text-sm text-gray-600">
            {siteContent.legal.status}
          </p>
        </div>

        {/* Alternative Ways to Support */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-nextkey-purple mb-8">Other Ways to Support</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Volunteer With Us</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Partner With Us</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-nextkey-purple text-nextkey-purple hover:bg-nextkey-purple hover:text-white rounded-xl"
              asChild
            >
              <a href="/get-involved">Shop Our Merch</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

