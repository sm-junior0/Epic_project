import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp, Globe, Briefcase, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToTop from '@/components/ScrollToTop';

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
              Comprehensive, data-driven career guidance designed to support every step of your professional journey—from self-discovery to job placement.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Services */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full border-l-4 border-[#2E7D32]">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="mb-2">
                    <h4 className="font-medium text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A structured and supportive path to career success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
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
                Take the first step toward your future with EPIC's comprehensive career services.
              </p>
              <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <ScrollToTop />
    </div>
  );
};

const services = [
  {
    icon: BookOpen,
    title: "Career Guidance Assessment",
    description: "Uncover your strengths and align your future. We use psychometric tools, interest inventories, and skill assessments to match your personality, interests, and abilities with the most suitable career paths. Our data-backed process ensures accurate, personalized recommendations for each student.",
    features: [
      "Personality & interest tests",
      "Skills evaluation",
      "AI-powered matching to career fields"
    ]
  },
  {
    icon: Users,
    title: "Career Counselling",
    description: "One-on-one expert guidance to navigate your path. Our trained career counselors offer personalized sessions to help you understand your options, set goals, and make informed decisions. Whether you're choosing a high school major or planning a long-term career, we're here to support you.",
    features: [
      "Clarity on career options",
      "Professional goal setting",
      "Tailored academic advice"
    ]
  },
  {
    icon: TrendingUp,
    title: "Skill Development Programs",
    description: "Build the skills that employers value. Our targeted development programs strengthen your leadership, communication, critical thinking, and teamwork—core skills needed in today's job market.",
    features: [
      "Communication & presentation",
      "Leadership & teamwork",
      "Problem-solving & critical thinking"
    ]
  },
  {
    icon: Globe,
    title: "Career Fairs",
    description: "Explore opportunities and connect with employers. Epic hosts career fairs that bring together students and a variety of industry professionals. Learn about diverse fields, internships, and full-time roles while networking with potential employers.",
    features: [
      "Meet recruiters from top companies",
      "Discover in-demand job roles",
      "On-the-spot application opportunities"
    ]
  },
  {
    icon: Briefcase,
    title: "Job Placement Services",
    description: "Helping you secure the right job, not just any job. We connect students with job openings that match their interests and skills. From refining your resume to preparing for interviews, we offer end-to-end job search support.",
    features: [
      "Resume & cover letter preparation",
      "Interview coaching",
      "Job application guidance"
    ]
  },
  {
    icon: Handshake,
    title: "Internship Opportunities",
    description: "Gain experience that sets you apart. We work with trusted partners to offer internship placements that align with your goals. These opportunities allow you to build hands-on experience and gain exposure to real-world work environments.",
    features: [
      "Practical work experience",
      "Networking opportunities",
      "Stronger job market competitiveness"
    ]
  }
];

const process = [
  {
    title: "Define",
    description: "We begin by understanding your personality, strengths, and goals using a series of career tests and evaluations."
  },
  {
    title: "Deepen",
    description: "Based on your results, we create a detailed and customized career plan tailored to your aspirations and market realities."
  },
  {
    title: "Strengthen",
    description: "Receive continued mentorship, tools, and updates to help you track progress, refine goals, and succeed long-term."
  }
];

export default Services;