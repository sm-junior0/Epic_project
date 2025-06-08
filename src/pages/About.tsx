import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, MapPin, Mail, Linkedin } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import Sangwa from '../assets/team/Sangwa.png'
import fils from '../assets/team/fils.png'
import kevin from '../assets/team/Kevin.png'

const About = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Data-Driven Approach",
      description: "We combine market insights with personal preferences to ensure your career decisions are both heartfelt and well-informed."
    },
    {
      icon: Target,
      title: "Focused Guidance",
      description: "Our structured Define-Deepen-Strengthen methodology provides clear steps toward your career goals."
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Every student receives individualized attention tailored to their unique strengths and aspirations."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Our track record speaks for itself - students who work with us achieve their career objectives."
    }
  ];

  const teamMembers = [
    {
      name: "Sangwa Deus Dedit",
      role: "Project Manager",
      image: Sangwa,
      bio: "Career development expert with 10+ years in education and data analytics",
      location: "Kigali, Rwanda"
    },
    {
      name: "Kevin",
      role: "Marketing Manager",
      image: kevin,
      bio: "Specialized in labor market analysis and career trend forecasting",
      location: "Kigali, Rwanda"
    },
    {
      name: "fils serugendo",
      role: "Sales Manager",
      image: fils,
      bio: "Passionate about guiding students through their career journey",
      location: "Kigali, Rwanda"
    },
    {
      name: "David Nkurunziza",
      role: "Partnership Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Building strategic partnerships with industry leaders and educational institutions",
      location: "Kigali, Rwanda"
    }
  ];

  const galleryItems = [
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Career planning session"
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Data analysis workshop"
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Student mentoring"
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Career guidance meeting"
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Team collaboration"
    },
    {
      type: "image",
      src: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
      alt: "Professional development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaboration and planning"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hover:scale-105 transition-transform duration-300">
              About 
              <span className="text-blue-600">
                {" "}EPIC Careers
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another career guidance service. We're your strategic partner 
              in building a future that perfectly aligns with your passions and market realities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To give you all the tools, resources, and guidance you need to make career decisions 
                you can feel confident about. We believe that when you combine personal reflection 
                with hard data, you create a foundation for career success that's both meaningful and sustainable.
              </p>
              <p className="text-lg text-gray-600">
                Through our structured Define-Deepen-Strengthen approach, we help students transform 
                uncertainty into clarity, turning raw interests and academic performance into robust, 
                actionable career plans.
              </p>
            </div>
            <div className="animate-fade-in hover:scale-105 transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the top name in career guidance across Africa and beyond, helping everyone find 
                work that brings them satisfaction, purpose, and stability. We envision a world where 
                no student has to choose between following their passion and securing their future.
              </p>
              <p className="text-lg text-gray-600">
                Our goal is to create an ecosystem where data-driven insights meet personalized support, 
                ensuring that every career decision is informed, strategic, and aligned with both 
                personal values and market opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes EPIC Different</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In today's rapidly changing job market, career decisions need more than just intuition. 
              They need data, strategy, and personalized guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in border-l-4 border-teal-600">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of career experts, data analysts, and student success specialists 
              are dedicated to helping you navigate your career journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in group">
                <CardHeader className="text-center pb-2">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-teal-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{member.name}</CardTitle>
                  <p className="text-sm font-medium text-teal-600">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                  <div className="flex items-center justify-center text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    {member.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how EPIC Careers is transforming students' lives through data-driven career guidance 
              and personalized support across Rwanda and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group animate-fade-in hover:scale-105 transition-all duration-300">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{item.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rwanda Focus */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rwanda-Based, Globally Relevant</h2>
              <p className="text-lg text-gray-600 mb-6">
                While we're proudly based in Kigali, Rwanda, our approach and insights have global relevance. 
                We understand the unique challenges and opportunities within the East African context, while 
                staying connected to international trends and best practices.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our local expertise combined with global perspective allows us to offer career guidance that's 
                both culturally relevant and internationally competitive. Whether you're planning to build your 
                career locally or exploring opportunities abroad, we provide the insights you need.
              </p>
              <div className="bg-blue-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Data-Driven Career Decisions Matter Today</h3>
                <p className="text-gray-600">
                  The job market is evolving faster than ever. Skills that were in demand five years ago may be 
                  obsolete today, while entirely new career paths are emerging. Without access to current market 
                  data and trends, students risk making decisions based on outdated information. EPIC bridges this 
                  gap by providing real-time insights that inform smarter career choices.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global connectivity and local expertise"
                className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;