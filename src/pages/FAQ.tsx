import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { Rocket, CreditCard, GraduationCap, Building2, LucideIcon } from "lucide-react";

interface Category {
  title: string;
  description: string;
  questions: number[];
  icon: LucideIcon;
}

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is the goal of your organization?",
      answer: "We provide high school students with data-driven career guidance and study abroad opportunities. Our goal is to help students make informed decisions about their future using accurate market information and personalized assessments."
    },
    {
      question: "How does your organization use data analytics?",
      answer: "We analyze labor market trends, employment statistics, and education requirements to create personalized career profiles. This data helps match students' skills and interests with suitable career paths."
    },
    {
      question: "What types of study abroad programs do you offer?",
      answer: "We offer semester/year programs, language immersion, and internships. These programs enhance academic, personal, and professional development through international experiences."
    },
    {
      question: "How do you ensure student safety abroad?",
      answer: "We partner with reputable institutions and provide pre-departure orientations. On-site support services help students navigate cultural and academic differences safely."
    },
    {
      question: "Is there a fee for your services?",
      answer: "Career guidance services are completely free for high school students. Study abroad programs may have fees depending on the specific program and institution."
    },
    {
      question: "How can schools access your services?",
      answer: "Schools can create free accounts on our data analysis site for career assessments. Study abroad applications are processed through our Fast Track portal with team guidance."
    },
    {
      question: "What age groups do you serve?",
      answer: "We primarily serve high school students making career decisions. Our services also benefit university students and young professionals exploring career options."
    },
    {
      question: "How current is your career data?",
      answer: "We update our databases quarterly with the latest labor market trends. Our algorithms incorporate real-time job market shifts and emerging industry demands."
    },
    {
      question: "Do you provide university application support?",
      answer: "Yes, we offer guidance on selecting suitable programs and preparing applications. Our services include essay reviews and interview preparation for competitive programs."
    },
    {
      question: "Can students access your services individually?",
      answer: "Absolutely. While we partner with schools, individual students can register directly. Parents can also create accounts for their children to access our resources."
    }
  ];

  const categories: Category[] = [
    {
      title: "General Information",
      description: "About our organization and services",
      questions: [0, 5, 9],
      icon: Rocket
    },
    {
      title: "Data & Methodology",
      description: "How we analyze career information",
      questions: [1, 7],
      icon: CreditCard
    },
    {
      title: "Study Abroad",
      description: "International education programs",
      questions: [2, 3, 8],
      icon: GraduationCap
    },
    {
      title: "Access & Eligibility",
      description: "Who can use our services",
      questions: [4, 6],
      icon: Building2
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fade-in" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FAQ"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked 
              <span className="text-[#2E7D32]">
                {" "}Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and career guidance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Categories */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-[#2E7D32]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{category.description}</p>
                  <p className="text-xs text-[#2E7D32]">{category.questions.length} key questions</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Accordion */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg hover:border-[#2E7D32] transition-colors">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#F5F5F5]/50">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-left font-medium text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600 bg-[#F5F5F5]/30">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Contact us directly and we'll be happy to help.
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

export default FAQ;