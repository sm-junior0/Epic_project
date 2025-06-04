
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Film, Music, Megaphone } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "DreamizeAfrica",
      sector: "Tech & Digital Careers",
      icon: Monitor,
      description: "Leading technology and digital skills training organization focused on preparing students for the digital economy.",
      services: [
        "Software Development Training",
        "Digital Marketing Courses",
        "Data Science Programs",
        "UX/UI Design Workshops",
        "Tech Career Mentorship"
      ],
      focus: "Bridging the gap between academic learning and industry-ready tech skills through hands-on projects and real-world applications."
    },
    {
      name: "Green Land Studio",
      sector: "Filmmaking & Creative Media",
      icon: Film,
      description: "Professional filmmaking and creative content production studio offering comprehensive media training programs.",
      services: [
        "Film Production Training",
        "Video Editing Masterclasses",
        "Cinematography Workshops",
        "Screenwriting Programs",
        "Creative Direction Mentorship"
      ],
      focus: "Nurturing creative talent through professional-grade training and industry exposure in the rapidly growing African film industry."
    },
    {
      name: "Intare Sound Wave",
      sector: "Music & Audio Production",
      icon: Music,
      description: "Premier music production and audio engineering center providing world-class training in sound production.",
      services: [
        "Music Production Training",
        "Audio Engineering Courses",
        "Sound Design Workshops",
        "Recording Techniques",
        "Music Business Education"
      ],
      focus: "Empowering the next generation of audio professionals with cutting-edge technology and industry-standard practices."
    },
    {
      name: "Agura",
      sector: "Marketing, Sales & Branding",
      icon: Megaphone,
      description: "Strategic marketing and brand development agency specializing in comprehensive business growth solutions.",
      services: [
        "Digital Marketing Strategy",
        "Brand Development",
        "Sales Training Programs",
        "Market Research",
        "Business Development Consulting"
      ],
      focus: "Building strategic marketing capabilities that drive business growth and create lasting brand value in competitive markets."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our strategic partners who provide specialized training and career opportunities 
              across diverse industries, creating a comprehensive support network for your career journey.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{partner.name}</CardTitle>
                          <CardDescription className="text-lg font-medium text-blue-600">
                            {partner.sector}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg">{partner.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Services & Programs</h4>
                        <ul className="space-y-2">
                          {partner.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Focus Area</h4>
                        <p className="text-gray-600">{partner.focus}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Partnership Model Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our ecosystem approach ensures students receive comprehensive support across all aspects of their chosen career path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Each partner brings deep industry knowledge and current market insights to ensure 
                relevant, up-to-date career guidance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Training</h3>
              <p className="text-gray-600">
                Students gain hands-on experience through specialized programs that prepare them 
                for real-world career challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Access</h3>
              <p className="text-gray-600">
                Direct connections to industry professionals and potential employers create 
                valuable networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Interested in Becoming a Partner?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our ecosystem and help shape the future of career development in Africa.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Partner With Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Partners;
