import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Image, Video, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";

// Import all gallery images
import img01 from "@/assets/gallery/01.jpg";
import img02 from "@/assets/gallery/02.jpg";
import img03 from "@/assets/gallery/03.jpg";
import img04 from "@/assets/gallery/04.jpg";
import img05 from "@/assets/gallery/05.jpg";
import img06 from "@/assets/gallery/06.jpg";
import img07 from "@/assets/gallery/07.jpg";
import img08 from "@/assets/gallery/08.jpg";
import img09 from "@/assets/gallery/09.jpg";
import img10 from "@/assets/gallery/10.jpg";
import img11 from "@/assets/gallery/11.jpg";
import img12 from "@/assets/gallery/12.jpg";
import img13 from "@/assets/gallery/13.jpg";
import img14 from "@/assets/gallery/14.jpg";
import img15 from "@/assets/gallery/15.jpeg";
import img16 from "@/assets/gallery/16.jpg";
import img17 from "@/assets/gallery/17.jpg";
import img18 from "@/assets/gallery/18.jpg";
import img19 from "@/assets/gallery/19.jpg";
import img20 from "@/assets/gallery/20.jpg";
import img21 from "@/assets/gallery/21.jpg";
import img22 from "@/assets/gallery/22.jpg";
import img23 from "@/assets/gallery/23.jpg";
import img24 from "@/assets/gallery/24.jpg";
import img25 from "@/assets/gallery/25.jpg";
import img26 from "@/assets/gallery/26.jpg";
import img27 from "@/assets/gallery/27.jpeg";
import img28 from "@/assets/gallery/28.jpg";
import img29 from "@/assets/gallery/29.jpg";
import img30 from "@/assets/gallery/30.jpg";
import img31 from "@/assets/gallery/31.jpg";
import img32 from "@/assets/gallery/32.jpg";
import videoULK from "@/assets/gallery/ULK.mp4";

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<'all' | 'image' | 'video'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      url: img01,
      title: 'Career Development Workshop',
      description: 'Interactive workshop on career planning and development',
      date: '2024-03-15',
      tags: ['workshop', 'career', 'development', 'planning']
    },
    {
      id: 2,
      type: 'image',
      url: img02,
      title: 'Networking Event',
      description: 'Professional networking session with industry experts',
      date: '2024-03-10',
      tags: ['networking', 'professional', 'event', 'experts']
    },
    {
      id: 3,
      type: 'image',
      url: img03,
      title: 'Skills Training',
      description: 'Practical skills development session',
      date: '2024-03-05',
      tags: ['skills', 'training', 'development', 'practical']
    },
    {
      id: 4,
      type: 'image',
      url: img04,
      title: 'Team Building',
      description: 'Collaborative team building activities',
      date: '2024-03-01',
      tags: ['team', 'building', 'collaboration', 'activities']
    },
    {
      id: 5,
      type: 'image',
      url: img05,
      title: 'Music Production Studio',
      description: 'State-of-the-art music production facility showcasing professional recording equipment and sound engineering capabilities. Students learn hands-on experience in music production and audio engineering.',
      date: '2024-02-28',
      tags: ['music', 'production', 'studio', 'audio', 'engineering']
    },
    {
      id: 6,
      type: 'image',
      url: img06,
      title: 'Career Fair',
      description: 'Annual career fair with multiple employers',
      date: '2024-02-25',
      tags: ['career', 'fair', 'employers', 'opportunities']
    },
    {
      id: 7,
      type: 'image',
      url: img07,
      title: 'Professional Development',
      description: 'Professional skills enhancement workshop',
      date: '2024-02-20',
      tags: ['professional', 'development', 'skills', 'workshop']
    },
    {
      id: 8,
      type: 'image',
      url: img08,
      title: 'Industry Insights',
      description: 'Industry trends and future opportunities discussion',
      date: '2024-02-15',
      tags: ['industry', 'insights', 'trends', 'opportunities']
    },
    {
      id: 9,
      type: 'image',
      url: img09,
      title: 'Success Stories',
      description: 'Sharing success stories and experiences',
      date: '2024-02-10',
      tags: ['success', 'stories', 'experiences', 'motivation']
    },
    {
      id: 10,
      type: 'image',
      url: img10,
      title: 'Career Planning',
      description: 'Strategic career planning session',
      date: '2024-02-05',
      tags: ['career', 'planning', 'strategy', 'development']
    },
    {
      id: 11,
      type: 'image',
      url: img11,
      title: 'Professional Networking',
      description: 'Building professional connections and relationships',
      date: '2024-02-01',
      tags: ['networking', 'professional', 'connections', 'relationships']
    },
    {
      id: 12,
      type: 'image',
      url: img12,
      title: 'Skill Enhancement',
      description: 'Advanced skills development workshop',
      date: '2024-01-28',
      tags: ['skills', 'enhancement', 'development', 'workshop']
    },
    {
      id: 13,
      type: 'image',
      url: img13,
      title: 'Sound Engineering Workshop',
      description: 'Expert-led workshop on sound engineering and music production techniques. Students gain practical experience with professional audio equipment and learn industry-standard production methods.',
      date: '2024-01-25',
      tags: ['music', 'sound', 'engineering', 'workshop', 'production']
    },
    {
      id: 14,
      type: 'image',
      url: img14,
      title: 'Professional Growth',
      description: 'Strategies for professional growth and advancement',
      date: '2024-01-20',
      tags: ['professional', 'growth', 'advancement', 'strategies']
    },
    {
      id: 15,
      type: 'image',
      url: img15,
      title: 'Industry Workshop',
      description: 'Industry-specific skills and knowledge workshop',
      date: '2024-01-15',
      tags: ['industry', 'workshop', 'skills', 'knowledge']
    },
    {
      id: 16,
      type: 'image',
      url: img16,
      title: 'Career Development',
      description: 'Comprehensive career development program',
      date: '2024-01-10',
      tags: ['career', 'development', 'program', 'comprehensive']
    },
    {
      id: 17,
      type: 'image',
      url: img17,
      title: 'Student Success',
      description: 'Celebrating student achievements and milestones',
      date: '2024-01-05',
      tags: ['student', 'success', 'achievements', 'milestones']
    },
    {
      id: 18,
      type: 'image',
      url: img18,
      title: 'Music Industry Career Paths',
      description: 'Exploring diverse career opportunities in Rwanda\'s growing music industry, from production and engineering to artist management and music business.',
      date: '2024-01-01',
      tags: ['music', 'career', 'industry', 'opportunities', 'production']
    },
    {
      id: 19,
      type: 'image',
      url: img19,
      title: 'Professional Training',
      description: 'Advanced professional training and development',
      date: '2023-12-28',
      tags: ['professional', 'training', 'development', 'advanced']
    },
    {
      id: 20,
      type: 'image',
      url: img20,
      title: 'Career Counseling',
      description: 'One-on-one career counseling sessions',
      date: '2023-12-25',
      tags: ['career', 'counseling', 'guidance', 'personal']
    },
    {
      id: 21,
      type: 'image',
      url: img21,
      title: 'Music Technology Lab',
      description: 'Advanced music technology laboratory equipped with cutting-edge production tools and software. Students learn digital music production and modern recording techniques.',
      date: '2023-12-20',
      tags: ['music', 'technology', 'production', 'digital', 'recording']
    },
    {
      id: 22,
      type: 'image',
      url: img22,
      title: 'Skill Building',
      description: 'Practical skill-building workshops and sessions',
      date: '2023-12-15',
      tags: ['skills', 'building', 'workshop', 'practical']
    },
    {
      id: 23,
      type: 'image',
      url: img23,
      title: 'Career Success',
      description: 'Celebrating career milestones and achievements',
      date: '2023-12-10',
      tags: ['career', 'success', 'achievements', 'milestones']
    },
    {
      id: 24,
      type: 'image',
      url: img24,
      title: 'Professional Network',
      description: 'Expanding professional networks and connections',
      date: '2023-12-05',
      tags: ['professional', 'network', 'connections', 'growth']
    },
    {
      id: 25,
      type: 'image',
      url: img25,
      title: 'Career Workshop',
      description: 'Interactive career development workshop',
      date: '2023-11-30',
      tags: ['career', 'workshop', 'development', 'interactive']
    },
    {
      id: 26,
      type: 'image',
      url: img26,
      title: 'Student Engagement',
      description: 'Active student participation in career activities',
      date: '2023-11-25',
      tags: ['student', 'engagement', 'participation', 'activities']
    },
    {
      id: 27,
      type: 'image',
      url: img27,
      title: 'Professional Development',
      description: 'Continuous learning and skill enhancement',
      date: '2023-11-20',
      tags: ['professional', 'development', 'learning', 'skills']
    },
    {
      id: 28,
      type: 'image',
      url: img28,
      title: 'Professional Recording Studio',
      description: 'Professional-grade recording studio environment where students can practice and develop their music production and sound engineering skills with industry-standard equipment.',
      date: '2023-11-20',
      tags: ['music', 'recording', 'studio', 'production', 'engineering']
    },
    {
      id: 29,
      type: 'image',
      url: img29,
      title: 'Career Development Workshop',
      description: 'Interactive workshop focusing on career planning and professional development strategies.',
      date: '2023-11-15',
      tags: ['career', 'workshop', 'development', 'planning']
    },
    {
      id: 30,
      type: 'image',
      url: img30,
      title: 'Music Production Masterclass',
      description: 'Intensive masterclass on music production and sound design, featuring industry professionals sharing insights on modern music production techniques and trends.',
      date: '2023-11-10',
      tags: ['music', 'production', 'masterclass', 'sound', 'design']
    },
    {
      id: 31,
      type: 'image',
      url: img31,
      title: 'Professional Skills Training',
      description: 'Comprehensive training session on essential professional skills and workplace competencies.',
      date: '2023-11-05',
      tags: ['skills', 'training', 'professional', 'development']
    },
    {
      id: 32,
      type: 'image',
      url: img32,
      title: 'Industry Networking Event',
      description: 'Networking event connecting students with industry professionals and potential employers.',
      date: '2023-11-01',
      tags: ['networking', 'industry', 'career', 'opportunities']
    },
  ];

  const filteredItems = mediaItems
    .filter(item => {
      const matchesType = filterType === 'all' || item.type === filterType;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesType && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gallery hero background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our 
              <span className="text-[#2E7D32]">
                {" "}Gallery
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of events, workshops, and success stories through 
              images and videos from our career development journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2E7D32] h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#2E7D32]/20 focus:border-[#2E7D32] focus:ring-[#2E7D32]"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-[#2E7D32]" />
                <span className="text-sm font-medium text-gray-600">Filter:</span>
              </div>
              
              <Select value={filterType} onValueChange={(value: 'all' | 'image' | 'video') => setFilterType(value)}>
                <SelectTrigger className="w-32 border-[#2E7D32]/20 focus:border-[#2E7D32] focus:ring-[#2E7D32]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Media</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: 'date' | 'title') => setSortBy(value)}>
                <SelectTrigger className="w-32 border-[#2E7D32]/20 focus:border-[#2E7D32] focus:ring-[#2E7D32]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">By Date</SelectItem>
                  <SelectItem value="title">By Title</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredItems.length} of {mediaItems.length} items
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-[#2E7D32] mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in border-[#2E7D32]/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge 
                        variant={item.type === 'video' ? 'default' : 'secondary'} 
                        className={`flex items-center gap-1 ${
                          item.type === 'video' 
                            ? 'bg-[#2E7D32] text-white' 
                            : 'bg-[#2E7D32]/10 text-[#2E7D32]'
                        }`}
                      >
                        {item.type === 'video' ? <Video className="h-3 w-3" /> : <Image className="h-3 w-3" />}
                        {item.type}
                      </Badge>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#2E7D32] bg-opacity-50 rounded-full flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                          <Video className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-[#2E7D32]" />
                      <span className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="outline" 
                          className="text-xs border-[#2E7D32]/20 text-[#2E7D32] hover:bg-[#2E7D32]/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge 
                          variant="outline" 
                          className="text-xs border-[#2E7D32]/20 text-[#2E7D32] hover:bg-[#2E7D32]/10"
                        >
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Gallery;