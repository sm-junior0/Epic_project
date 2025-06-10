import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Monitor, Film, Music, Megaphone } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";

// Import partner logos
import dreamizeLogo from "@/assets/logos/dreamizeafricaLogo.png";
import greenLandLogo from "@/assets/logos/GreenLand.png";
import isiLogo from "@/assets/logos/IsiLOGO.png";
import aguraLogo from "@/assets/logos/aguralogo2.png";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "DreamizeAfrica",
      sector: "Tech & Digital Careers",
      icon: Monitor,
      logo: dreamizeLogo,
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
      name: "GreenLand Film and Television School",
      sector: "Filmmaking & Creative Media",
      icon: Film,
      logo: greenLandLogo,
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
      name: "Intare SoundWave Initiative",
      sector: "Music & Audio Production",
      icon: Music,
      logo: isiLogo,
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
      name: "Agura Group",
      sector: "Marketing, Sales & Branding",
      icon: Megaphone,
      logo: aguraLogo,
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
      <AnimatedSection animationType="fade-in" className="bg-gradient-to-br from-[#F5F5F5] via-white to-[#F5F5F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="text-[#2E7D32]">
                {" "}Ecosystem
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our strategic partners who provide specialized training and career opportunities 
              across diverse industries, creating a comprehensive support network for your career journey.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Section */}
      <AnimatedSection animationType="slide-up" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-[#2E7D32]">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center flex-shrink-0 p-4">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{partner.name}</CardTitle>
                          <CardDescription className="text-lg font-medium text-[#2E7D32]">
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
                              <div className="w-2 h-2 bg-[#2E7D32] rounded-full flex-shrink-0"></div>
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
      </AnimatedSection>

      {/* Partnership Benefits */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Partnership Model Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our ecosystem approach ensures students receive comprehensive support across all aspects of their chosen career path.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Expertise</h3>
              <p className="text-gray-600">
                Each partner brings deep industry knowledge and current market insights to ensure 
                relevant, up-to-date career guidance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Training</h3>
              <p className="text-gray-600">
                Students gain hands-on experience through specialized programs that prepare them 
                for real-world career challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mx-auto mb-4">
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
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/10 via-[#2E7D32]/5 to-[#2E7D32]/10"></div>
            <div className="relative px-8 py-12 text-center border border-[#2E7D32]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Becoming a Partner?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our ecosystem and help shape the future of career development in Africa.
              </p>
              <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ScrollToTop />
    </div>
  );
};

export default Partners;