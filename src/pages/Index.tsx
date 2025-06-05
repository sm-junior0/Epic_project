import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Users, Target, Globe, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Career Trend Analysis",
      description: "Data-driven insights into emerging job markets and career opportunities",
      link: "/services"
    },
    {
      icon: Users,
      title: "Student Preference Analytics",
      description: "Personalized career recommendations based on your interests and strengths",
      link: "/services"
    },
    {
      icon: Target,
      title: "Study Abroad Programs",
      description: "Tailored international education pathways using market trends",
      link: "/services"
    },
    {
      icon: Globe,
      title: "Performance Tracking",
      description: "Measure your progress and success throughout your career journey",
      link: "/services"
    }
  ];

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

  const stats = [
    { number: "500+", label: "Students Guided", icon: Users },
    { number: "95%", label: "Success Rate", icon: CheckCircle },
    { number: "50+", label: "Partner Organizations", icon: Globe },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Students collaborating on career planning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
              Find Your Future.
              <span className="block text-blue-600">Start with EPIC.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your interests and performance into a robust career action plan through 
              data-driven guidance and personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
                <Link to="/about">Learn More About EPIC</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in hover:scale-110 transition-all duration-300">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About EPIC Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About EPIC Careers</h2>
              <p className="text-lg text-gray-600 mb-6">
                EPIC Careers is your strategic partner in building a future that perfectly aligns with your 
                passions and market realities. We use a structured Define-Deepen-Strengthen approach to turn 
                your raw interests and academic performance into actionable career plans.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is to give you all the tools, resources, and guidance you need to make career 
                decisions you can feel confident about. We blend personal reflection with hard data to 
                ensure your choices are both heartfelt and well-informed.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Career guidance session"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive career guidance services designed to help you make informed decisions 
              about your future through data-driven insights and personalized support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in group border-l-4 border-teal-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button asChild variant="outline" size="sm" className="hover:bg-teal-50">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* EPIC Ecosystem - Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The EPIC Ecosystem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategic partnerships with leading organizations provide comprehensive 
              career guidance across diverse industries and specializations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in group">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {partner.icon}
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${partner.color}`}>
                    {partner.focus}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-all duration-300">
              <Link to="/partners">
                Explore All Partners <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have successfully navigated their career paths with EPIC's 
            data-driven guidance and personalized support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="hover:scale-105 transition-all duration-300">
              <Link to="/contact">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600 hover:scale-105 transition-all duration-300">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Index;