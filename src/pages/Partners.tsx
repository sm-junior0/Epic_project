import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Partners: React.FC = () => {
  const partners = [
    {
      name: "DreamizeAfrica",
      focus: "Tech & Digital Careers",
      description: "Leading technology training and career placement",
      icon: "💻",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Green Land Studio",
      focus: "Filmmaking & Creative Media",
      description: "Professional media production and creative arts training",
      icon: "🎬",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Intare Sound Wave",
      focus: "Music & Audio Production",
      description: "Comprehensive music production and audio engineering",
      icon: "🎵",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Agura",
      focus: "Marketing, Sales & Branding",
      description: "Strategic marketing and brand development expertise",
      icon: "📈",
      color: "bg-orange-100 text-orange-800"
    }
  ];

  const benefits = [
    {
      title: "Access to Resources",
      description: "Gain access to our comprehensive career development resources and tools."
    },
    {
      title: "Networking Opportunities",
      description: "Connect with other partners and expand your professional network."
    },
    {
      title: "Joint Programs",
      description: "Collaborate on specialized programs and initiatives for career development."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fade-in" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaboration and planning"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Strategic partnerships that enhance our ability to provide comprehensive career guidance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Partners Grid */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{partner.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${partner.color} mb-4`}>
                    {partner.focus}
                  </div>
                  <p className="text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of partnering with EPIC for your career development needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our network of partners and help shape the future of career development.
          </p>
          <Button asChild className="bg-white text-blue-600 hover:bg-blue-50">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Partners;