
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Image, Video, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollToTop from "@/components/ScrollToTop";

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
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Career Fair 2024',
      description: 'Annual career networking event with industry professionals',
      date: '2024-03-15',
      tags: ['career', 'networking', 'fair', 'students']
    },
    {
      id: 2,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Study Abroad Seminar',
      description: 'Virtual seminar about international education opportunities',
      date: '2024-02-28',
      tags: ['study abroad', 'seminar', 'education', 'international']
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Workshop Session',
      description: 'Interactive workshop on skill development and career planning',
      date: '2024-03-10',
      tags: ['workshop', 'skills', 'development', 'planning']
    },
    {
      id: 4,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Success Stories',
      description: 'Video testimonials from successful career transitions',
      date: '2024-01-20',
      tags: ['success', 'testimonials', 'career', 'transition']
    },
    {
      id: 5,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Team Building Event',
      description: 'Company team building and networking event',
      date: '2024-03-05',
      tags: ['team building', 'networking', 'event', 'collaboration']
    },
    {
      id: 6,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Industry Insights',
      description: 'Expert panel discussion on industry trends and opportunities',
      date: '2024-02-15',
      tags: ['industry', 'insights', 'panel', 'trends']
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Graduation Ceremony',
      description: 'Celebrating successful program completions',
      date: '2024-04-01',
      tags: ['graduation', 'ceremony', 'success', 'completion']
    },
    {
      id: 8,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
      title: 'Training Highlights',
      description: 'Highlights from professional development training sessions',
      date: '2024-01-30',
      tags: ['training', 'development', 'professional', 'highlights']
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
              <div className="text-gray-400 mb-4">
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
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant={item.type === 'video' ? 'default' : 'secondary'} className="flex items-center gap-1">
                        {item.type === 'video' ? <Video className="h-3 w-3" /> : <Image className="h-3 w-3" />}
                        {item.type}
                      </Badge>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black bg-opacity-50 rounded-full flex items-center justify-center group-hover:bg-opacity-70 transition-all">
                          <Video className="h-6 w-6 text-white ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="h-4 w-4 text-gray-400" />
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
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
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