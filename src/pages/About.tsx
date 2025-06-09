import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, MapPin, Mail, Linkedin, Eye } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import Sangwa from '../assets/team/Sangwa.png'
import fils from '../assets/team/fils.png'
import kevin from '../assets/team/Kevin.png'
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Import gallery images
import img01 from "@/assets/gallery/01.jpg";
import img02 from "@/assets/gallery/02.jpg";
import img03 from "@/assets/gallery/03.jpg";
import img04 from "@/assets/gallery/04.jpg";
import img05 from "@/assets/gallery/05.jpg";
import img06 from "@/assets/gallery/06.jpg";

const values = [
  {
    title: "Data-Driven Insights",
    description: "We combine market data with personal interests to guide your career decisions.",
    icon: TrendingUp
  },
  {
    title: "Personalized Approach",
    description: "Every student is unique. We tailor our guidance to your specific needs and goals.",
    icon: Target
  },
  {
    title: "Expert Team",
    description: "Our team brings together career experts, data analysts, and student success specialists.",
    icon: Users
  },
  {
    title: "Proven Results",
    description: "Our approach has helped countless students find their ideal career paths.",
    icon: Award
  }
];

const teamMembers = [
  {
    name: "Sangwa Deus Dedit",
    role: "Project Manager",
    bio: "Experienced in leading education-focused projects that bridge student potential with real-world opportunities through strategic planning and coordination.",
    location: "Kigali, Rwanda",
    image: Sangwa
  },
  {
    name: "Fils Serugendo",
    role: "Sales Manager",
    bio: "Specializes in identifying student needs and connecting them with the right career resources by leveraging sales strategies and market intelligence.",
    location: "Kigali, Rwanda",
    image: fils
  },
  {
    name: "Kevin",
    role: "Marketing Manager",
    bio: "Expert in crafting impactful campaigns that engage students and promote career development programs through effective storytelling and digital outreach.",
    location: "Kigali, Rwanda",
    image: kevin
  }
  
];

const galleryItems = [
  {
    src: img01,
    alt: "Career guidance session"
  },
  {
    src: img02,
    alt: "Student workshop"
  },
  {
    src: img03,
    alt: "Team collaboration"
  },
  {
    src: img04,
    alt: "Success celebration"
  },
  {
    src: img05,
    alt: "Professional development"
  },
  {
    src: img06,
    alt: "Career fair"
  }
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedSection animationType="fade-in" className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About 
              <span className="text-[#2E7D32]">
                {" "}EPIC
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to make informed career decisions through data-driven insights and personalized guidance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-[#2E7D32]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize career guidance by leveraging data analytics and market insights, 
                  helping students make informed decisions about their future paths.
                </p>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-[#2E7D32]">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the leading platform for career guidance, connecting students with 
                  opportunities that align with their aspirations and market demands.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The core principles that guide our approach to career guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals behind EPIC's success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">{member.name}</h3>
                  <p className="text-[#2E7D32] text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-[#2E7D32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of our journey to transform career guidance and help students achieve their dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#2E7D32] hover:bg-[#F5F5F5]">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* What Makes Us Different */}
      <AnimatedSection animationType="slide-in-right" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-[#2E7D32]">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mx-auto mb-4 hover:rotate-12 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection animationType="fade-in" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how EPIC Careers is transforming students' lives through data-driven career guidance 
              and personalized support across Rwanda and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group hover:scale-105 transition-all duration-300">
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
      </AnimatedSection>

      {/* Rwanda Focus */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Global connectivity and local expertise"
                className="rounded-lg shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <ScrollToTop />
    </div>
  );
};

export default About;