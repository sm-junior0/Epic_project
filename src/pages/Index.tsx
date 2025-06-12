import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollToTop from '@/components/ScrollToTop';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fade-in" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Career with 
              <span className="text-[#2E7D32]"> EPIC</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Empowering students with data-driven insights and personalized career guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#F5F5F5]">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose 
              <span className="text-[#2E7D32]"> EPIC</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to career guidance sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
        </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It 
              <span className="text-[#2E7D32]"> Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, effective process to guide your career journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[#2E7D32] rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-semibold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#2E7D32]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success 
              <span className="text-[#2E7D32]"> Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who have transformed their careers with EPIC.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#2E7D32] rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{testimonial.name[0]}</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Career Journey Today</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Take the first step toward your dream career with EPIC's free and personalized guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white">
                  <Link to="/services">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#F5F5F5]">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
      <ScrollToTop />
    </div>
  );
};

const features = [
  {
    title: "Data-Driven Insights",
    description: "We use real market data to help students make informed decisions about their careers.",
    icon: CheckCircle2
  },
  {
    title: "Personalized Guidance",
    description: "Each student receives advice tailored to their skills, interests, and aspirations.",
    icon: CheckCircle2
  },
  {
    title: "Expert Support",
    description: "Our experienced counselors guide you through your career journey with care and expertise.",
    icon: CheckCircle2
  }
];

const steps = [
  {
    title: "Define Your Goals",
    description: "Identify your interests, strengths, and career aspirations with our expert guidance."
  },
  {
    title: "Explore Options",
    description: "Learn about career paths that align with your profile and real-world opportunities."
  },
  {
    title: "Take Action",
    description: "Develop a practical plan to pursue your education and career objectives."
  }
];

const testimonials: Testimonial[] = [
  {
    name: "Talia Niyonsaba",
    role: "High School Student",
    quote: "EPIC helped me go from feeling overwhelmed to confident about my future. Their personalized assessments showed me a clear path forward.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Peter Uwimana",
    role: "Parent",
    quote: "EPIC gave my child tailored, data-driven career advice that was far beyond generic guidance. I highly recommend them to other parents.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Aimee Mukamana",
    role: "Future Engineering Student",
    quote: "Thanks to EPIC, I discovered a passion for engineering I didn't know I had. Their guidance helped me find direction and motivation.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Claire Imanzi",
    role: "High School Counselor",
    quote: "EPIC has been a game-changer for our school. Their data-backed approach has made a real difference in my students' career planning.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  }
];

export default Index;