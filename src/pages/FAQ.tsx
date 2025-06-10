import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      question: "How does EPIC help students?",
      answer: "EPIC helps students through our structured Define-Deepen-Strengthen approach. We start by identifying your interests, strengths, and career goals through comprehensive assessments. Then we deepen your understanding of potential career paths using real market data and trends. Finally, we help you strengthen your career plan with ongoing support, skill development recommendations, and performance tracking."
    },
    {
      question: "Is this service free?",
      answer: "We offer both free and premium services. Our basic career assessment and general guidance resources are available at no cost. Premium services include personalized one-on-one consultations, detailed market analysis reports, and comprehensive career planning sessions. Contact us to learn more about our pricing structure and available packages."
    },
    {
      question: "Can I apply for study abroad from here?",
      answer: "While EPIC doesn't directly handle study abroad applications, we provide comprehensive study abroad program design services. We help you identify the best programs and universities that align with your career goals, assist with application strategy, identify scholarship opportunities, and provide guidance throughout the application process. We work with trusted partners to ensure you have complete support."
    },
    {
      question: "How can a company become a partner?",
      answer: "We welcome partnerships with organizations that share our commitment to career development. To become a partner, reach out through our contact form with 'Partnership' as the subject. We look for partners who can provide specialized training, mentorship opportunities, or career pathways in their respective industries. Our current ecosystem includes partners in technology, creative media, music production, and marketing."
    },
    {
      question: "What makes EPIC different from other career guidance services?",
      answer: "EPIC's unique approach combines personal reflection with hard market data. While many career services rely solely on personality tests or general advice, we analyze real job market trends, salary data, and industry forecasts to ensure your career decisions are both personally fulfilling and strategically sound. Our Rwanda-based perspective with global relevance also sets us apart."
    },
    {
      question: "How long does the career planning process take?",
      answer: "The timeline varies depending on your specific needs and chosen service level. Our basic assessment can be completed in 1-2 sessions, while comprehensive career planning typically takes 4-6 weeks. This includes initial assessment, market analysis, plan development, and follow-up sessions. We also provide ongoing support for as long as you need it."
    },
    {
      question: "Do you work with high school students?",
      answer: "Yes! We work with students at various stages of their academic journey, including high school students who are making decisions about university programs and career directions. Early career guidance can be particularly valuable in making informed decisions about higher education and future career paths."
    },
    {
      question: "What kind of data do you use for career trend analysis?",
      answer: "We analyze various data sources including job market reports, salary surveys, industry growth projections, skills demand forecasts, and education outcome statistics. We focus on both local (East African) and global trends to provide comprehensive insights that are relevant whether you plan to work locally or internationally."
    },
    {
      question: "Can you help with career changes for working professionals?",
      answer: "Absolutely! Our services aren't limited to students. We help working professionals who are considering career transitions, looking to advance in their current field, or seeking to pivot to new industries. Our data-driven approach is particularly valuable for professionals who want to make strategic career moves."
    },
    {
      question: "How do I get started with EPIC Careers?",
      answer: "Getting started is easy! You can reach out through our contact form, call us directly, or send us a WhatsApp message. We'll schedule an initial consultation to understand your needs and recommend the best service package for your situation. You can also start by exploring our free resources and basic assessment tools."
    }
  ];

  const categories: Category[] = [
    {
      title: "Getting Started",
      description: "New to EPIC? Start here for basic information",
      questions: [0, 9],
      icon: Rocket
    },
    {
      title: "Services & Pricing",
      description: "Learn about our offerings and costs",
      questions: [1, 4, 5],
      icon: CreditCard
    },
    {
      title: "Study Abroad & Education",
      description: "Questions about international education",
      questions: [2, 6, 7],
      icon: GraduationCap
    },
    {
      title: "Partnerships & Professional Services",
      description: "For organizations and working professionals",
      questions: [3, 8],
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
                  <p className="text-sm text-gray-600">{category.questions.length} questions</p>
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
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 hover:bg-[#F5F5F5]">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold">{index + 1}</span>
                      </div>
                      <span className="text-left font-medium text-gray-900">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
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