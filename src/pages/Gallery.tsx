import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Image, Video, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollToTop from "@/components/ScrollToTop";

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
import img15 from "@/assets/gallery/15.jpg";
import img16 from "@/assets/gallery/16.jpg";
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

const Gallery = () => {
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
      title: 'Leadership Seminar',
      description: 'Leadership development and management training',
      date: '2024-02-28',
      tags: ['leadership', 'seminar', 'management', 'training']
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
      title: 'Career Guidance',
      description: 'Personalized career guidance session',
      date: '2024-01-25',
      tags: ['career', 'guidance', 'personalized', 'development']
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
      type: 'video',
      url: videoULK,
      title: 'ULK Success Story',
      description: 'Video showcasing ULK success story and achievements',
      date: '2024-01-05',
      tags: ['video', 'success', 'story', 'achievements']
    }
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
              <span className="text-blue-600">
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
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">Filter:</span>
              </div>
              
              <Select value={filterType} onValueChange={(value: 'all' | 'image' | 'video') => setFilterType(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Media</SelectItem>
                  <SelectItem value="image">Images</SelectItem>
                  <SelectItem value="video">Videos</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={(value: 'date' | 'title') => setSortBy(value)}>
                <SelectTrigger className="w-32">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No items found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      {item.type === 'image' ? (
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <video
                          src={item.url}
                          controls
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/90">
                          {item.type === 'image' ? <Image className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
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