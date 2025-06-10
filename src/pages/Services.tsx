import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Services: React.FC = () => {
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
              Our 
              <span className="text-[#2E7D32]">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive career guidance services designed to help you make informed decisions 
              about your future.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Services */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full border-l-4 border-[#2E7D32]">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#2E7D32] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured approach to help you discover and pursue your ideal career path.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
            <div className="text-center">
                  <div className="w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {index + 1}
              </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
            </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-[#2E7D32] -ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/10 via-[#2E7D32]/5 to-[#2E7D32]/10"></div>
            <div className="relative px-8 py-12 text-center border border-[#2E7D32]/20 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Take the first step towards your dream career with EPIC's comprehensive guidance services.
              </p>
              <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

const services = [
  {
    icon: TrendingUp,
    title: "Career Trend Analysis",
    description: "Data-driven insights into emerging job markets and career opportunities",
    link: "/services#trends",
    features: ["Data-driven insights", "Emerging job markets", "Career opportunities"]
  },
  {
    icon: Users,
    title: "Student Preference Analytics",
    description: "Personalized career recommendations based on your interests and strengths",
    link: "/services#analytics",
    features: ["Personalized recommendations", "Interests and strengths", "Career path"]
  },
  {
    icon: Target,
    title: "Study Abroad Programs",
    description: "Tailored international education pathways using market trends",
    link: "/services#abroad",
    features: ["Tailored pathways", "International education", "Market trends"]
  },
  {
    icon: Globe,
    title: "Performance Tracking",
    description: "Measure your progress and success throughout your career journey",
    link: "/services#tracking",
    features: ["Progress tracking", "Career journey", "Success measurement"]
  }
];

const process = [
  {
    title: "Initial Assessment",
    description: "We evaluate your interests, strengths, and career goals through comprehensive assessments."
  },
  {
    title: "Personalized Planning",
    description: "Develop a customized career roadmap based on your unique profile and market opportunities."
  },
  {
    title: "Ongoing Support",
    description: "Receive continuous guidance and resources to help you achieve your career objectives."
  }
];

export default Services;