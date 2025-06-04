
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Globe, BarChart } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Career Trend Identification",
      description: "Analyze job market data to identify emerging career opportunities"
    },
    {
      icon: Users,
      title: "Student Preference Analytics",
      description: "Get personalized career recommendations based on your interests and performance"
    },
    {
      icon: Globe,
      title: "Study Abroad Programs",
      description: "Tailored study options designed using global education trends"
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Measure your progress and success with data-driven insights"
    }
  ];

  const partners = [
    {
      name: "DreamizeAfrica",
      sector: "Tech & Digital Careers",
      description: "Leading technology and digital skills training"
    },
    {
      name: "Green Land Studio",
      sector: "Filmmaking & Creative Media",
      description: "Professional filmmaking and creative content production"
    },
    {
      name: "Intare Sound Wave",
      sector: "Music & Audio Production",
      description: "Music production and audio engineering excellence"
    },
    {
      name: "Agura",
      sector: "Marketing, Sales & Branding",
      description: "Strategic marketing and brand development expertise"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Students studying together"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find Your Future.
              <span className="text-blue-600">
                {" "}Start with EPIC.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Turn your interests and school performance into a robust career action plan. 
              We blend personal reflection with hard data to make decisions you can feel confident about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About EPIC Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About EPIC Careers</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  EPIC Careers is a career-planning partner that uses structured steps—Define, Deepen, Strengthen—to 
                  turn your raw interests and school performance into a robust action plan. We're more than just career 
                  advice; we're your strategic partner in building a future that aligns with both your passions and 
                  market realities.
                </p>
                <p>
                  Our mission is to give you all the tools, resources, and guidance you need to make decisions you can 
                  feel confident about. Our vision is to be the top name in career guidance, helping everyone find work 
                  that brings them satisfaction, purpose, and stability through data-driven insights and personalized support.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Career planning and guidance"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Services</h2>
            <p className="text-lg text-gray-600">Data-driven career guidance tailored to your unique journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* EPIC Ecosystem - Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EPIC Ecosystem</h2>
            <p className="text-lg text-gray-600">Partnering with industry leaders across diverse career domains</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{partner.name.charAt(0)}</span>
                  </div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription className="font-medium text-blue-600">{partner.sector}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/partners">Meet Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Data-Driven Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Data analysis and charts"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Data-Driven Career Decisions Matter</h2>
              <p className="text-lg text-gray-600 mb-6">
                In today's rapidly changing job market, career decisions need more than just intuition. 
                They need data, strategy, and personalized guidance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The job market is evolving faster than ever. Skills that were in demand five years ago may be 
                obsolete today, while entirely new career paths are emerging. Without access to current market 
                data and trends, students risk making decisions based on outdated information.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/about">Learn More About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help? Start Here.</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your career uncertainty into a clear, actionable plan? 
            Let's build your future together.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
