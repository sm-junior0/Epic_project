import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award, MapPin, Mail, Linkedin, Eye } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

// Import team images
import Fils from '../assets/team/fils.jpeg';
import Daniella from '../assets/team/Daniella.jpg';
import Kenny from '../assets/team/Kenny.png';
import Sangwa from '../assets/team/Sangwa.jpeg';
import Kevin from '../assets/team/Kevin.jpeg';
import Ismail from '../assets/team/Isma.jpeg';

// Import gallery images
import img01 from "@/assets/gallery/01.jpg";
import img02 from "@/assets/gallery/02.jpg";
import img03 from "@/assets/gallery/03.jpg";
import img04 from "@/assets/gallery/04.jpg";
import img05 from "@/assets/gallery/05.jpg";
import img06 from "@/assets/gallery/06.jpg";
import team from "@/assets/team/team.jpeg"

const values = [
  {
    title: "Data-Driven Insights",
    description: "We combine labor market data with student profiles to ensure informed, confident career choices.",
    icon: TrendingUp
  },
  {
    title: "Personalized Approach",
    description: "AI-powered recommendations tailored to each student's unique aspirations and strengths.",
    icon: Target
  },
  {
    title: "Expert Team",
    description: "Career counselors, data analysts and educators working together for student success.",
    icon: Users
  },
  {
    title: "Proven Results",
    description: "Thousands of students empowered to pursue fulfilling career paths with confidence.",
    icon: Award
  }
];

const teamMembers = [
  {
    name: "Fils Serugendo",
    role: "Founder",
    bio: "Connects students with career resources through strategic partnerships and market-driven solutions.",
    image: Fils
  },
  {
    name: "Daniella Ishimwe",
    role: "Operations",
    bio: "Strategic leader driving education projects that connect student potential with real-world opportunities.",
    image: Daniella
  },
  {
    name: "Kenny Rulisa",
    role: "Creative Director",
    bio: "Strategic leader driving education projects that connect student potential with real-world opportunities.",
    image: Kenny
  },
  {
    name: "Sangwa Deus Dedit",
    role: "Marketing",
    bio: "Strategic leader driving education projects that connect student potential with real-world opportunities.",
    image: Sangwa
  },
  {
    name: "Kevin Ngabo",
    role: "Public Relations",
    bio: "Creates engaging campaigns that connect students with career development opportunities.",
    image: Kevin
  },
  {
    name: "Ismail Munyentwari",
    role: "Technical Project Manager",
    bio: "Leads technical implementations and digital solutions for innovative career guidance platforms.",
    image: Ismail
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
              Welcome to <span className="text-[#2E7D32]">EPIC Careers</span>, where data meets ambition. We provide students with personalized, data-driven career guidance that helps them make informed decisions about their future.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              EPIC Careers was founded in 2020 by a passionate team of educators, headhunters, marketers, and data analysts who saw a gap in career guidance for high school students.
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
                  To provide comprehensive, personalized career guidance that helps individuals discover their strengths, explore meaningful career options, and make informed decisions to achieve their professional goals.
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
                  We envision a world where everyone has access to the tools and support needed to build a fulfilling and successful career.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full border-l-4 border-[#2E7D32]">
                <CardContent className="p-6 flex flex-col">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-[#2E7D32]/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#2E7D32] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <AnimatedSection animationType="fade-in" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Action</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how EPIC Careers is transforming students' lives through data-driven career guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Rwanda Focus */}
      <AnimatedSection animationType="slide-up" className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Rwanda-Based, Globally Relevant</h2>
              <p className="text-lg text-gray-600 mb-6">
                Headquartered in Kigali, Rwanda, we proudly serve the East African education community while staying connected to international trends. Our localized expertise and global perspective help students make competitive career choices.
              </p>
              <div className="bg-white p-6 rounded-lg border border-[#2E7D32]/20">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">Why Data-Driven Career Decisions Matter Today</h3>
                <p className="text-gray-600">
                  The job market is changing faster than ever. New technologies and industries are reshaping what success looks like, and students must be prepared with current, relevant, and forward-looking insights.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={team}
                alt="EPIC team in Rwanda"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animationType="scale-in" className="py-16 bg-[#2E7D32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of a movement that's reshaping the future of career guidance.
          </p>
          <Button asChild className="bg-white text-[#2E7D32] hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </AnimatedSection>

      <ScrollToTop />
    </div>
  );
};

export default About;