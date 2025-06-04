
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
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

  const categories = [
    {
      title: "Getting Started",
      description: "New to EPIC? Start here for basic information",
      questions: [0, 9]
    },
    {
      title: "Services & Pricing",
      description: "Learn about our offerings and costs",
      questions: [1, 4, 5]
    },
    {
      title: "Study Abroad & Education",
      description: "Questions about international education",
      questions: [2, 6, 7]
    },
    {
      title: "Partnerships & Professional Services",
      description: "For organizations and working professionals",
      questions: [3, 8]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked 
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services, process, and how we can help 
              you achieve your career goals.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">
                    {category.questions.length} question{category.questions.length > 1 ? 's' : ''}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </Card>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is ready to provide personalized answers 
            to your specific questions.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
