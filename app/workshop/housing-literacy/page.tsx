import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Clock, Award, Users } from "lucide-react";
import { workshop } from "@/app/content/site";

export default function HousingLiteracyWorkshopPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-nextkey-purple mb-6">{workshop.title}</h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {workshop.intro}
          </p>
        </div>

        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">How We Are Developing It</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshop.howItWorks.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {index === 0 && <BookOpen className="h-12 w-12 text-nextkey-purple" />}
                    {index === 1 && <Users className="h-12 w-12 text-nextkey-purple" />}
                    {index === 2 && <Clock className="h-12 w-12 text-nextkey-purple" />}
                    {index === 3 && <Award className="h-12 w-12 text-nextkey-purple" />}
                  </div>
                  <CardTitle className="text-lg text-nextkey-purple">
                    {step.split(' – ')[0]}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">
                    {step.split(' – ')[1]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Workshop Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nextkey-purple text-center mb-8">Planned Workshop Sections</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-nextkey-purple text-center">
                  Housing Literacy Curriculum in Development
                </CardTitle>
                <p className="text-gray-600 text-center">
                  Ten planned sections to help learners understand housing processes and prepare for next steps
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {workshop.sections.map((section, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-nextkey-purple text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{section}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Primary CTA */}
        <div className="text-center mb-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-nextkey-purple to-purple-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Interested in a Workshop?</CardTitle>
              <p className="text-purple-100">
                Contact us about current community workshops, partnership inquiries, and digital workshop pilot opportunities.
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                className="bg-nextkey-gold text-nextkey-purple hover:bg-yellow-500 text-xl px-12 py-6 rounded-xl font-bold"
                asChild
              >
                <a href={workshop.cta.href}>
                  {workshop.cta.label}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Options */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-nextkey-purple mb-4">Development Status</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {workshop.implementationNotes}
          </p>
        </div>
      </div>
    </div>
  );
}

