
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Globe, Settings, BarChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Career Trend Identification",
      description: "Stay ahead of the curve with comprehensive job market analysis",
      features: [
        "Real-time job market data analysis",
        "Emerging industry trend reports", 
        "Skills demand forecasting",
        "Salary trend analysis",
        "Geographic opportunity mapping"
      ]
    },
    {
      icon: Users,
      title: "Student Preference Analytics",
      description: "Discover career paths that align with your unique profile",
      features: [
        "Comprehensive interest assessment",
        "Skills and strengths analysis",
        "Personality-career matching",
        "Academic performance correlation",
        "Personalized career recommendations"
      ]
    },
    {
      icon: Globe,
      title: "Study Abroad Program Design",
      description: "Tailored international education pathways",
      features: [
        "University program matching",
        "Scholarship opportunity identification",
        "Application strategy development",
        "Country-specific guidance",
        "Career outcome projections"
      ]
    },
    {
      icon: Settings,
      title: "Operational Optimization",
      description: "Streamline your career planning process",
      features: [
        "Goal setting and timeline creation",
        "Resource allocation planning",
        "Progress tracking systems",
        "Decision-making frameworks",
        "Process efficiency analysis"
      ]
    },
    {
      icon: BarChart,
      title: "Performance Tracking",
      description: "Measure and optimize your career development journey",
      features: [
        "Progress milestone tracking",
        "Success metrics analysis",
        "Placement rate monitoring",
        "Career satisfaction assessment",
        "ROI analysis on education investments"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Professional services and consulting"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="text-blue-600">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive, data-driven career guidance services designed to transform 
              your interests and performance into actionable career strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-lg">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process: Define, Deepen, Strengthen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive career development through three key phases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Define</h3>
              <p className="text-gray-600">
                Identify your interests, strengths, and career aspirations through comprehensive assessment 
                and market analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Deepen</h3>
              <p className="text-gray-600">
                Develop detailed understanding of chosen career paths, required skills, and strategic 
                educational planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strengthen</h3>
              <p className="text-gray-600">
                Implement your career plan with ongoing support, performance tracking, and strategic 
                adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create a career plan that's both personally fulfilling and strategically sound.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
