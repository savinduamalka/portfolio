import { Play, Eye, ThumbsUp, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ParticleSection } from '@/components/ParticleSection';

const videos = [
  {
    title:
      'Introduction to Cloud Computing in Sinhala - Cloud Computing මුල සිට',
    description:
      'Comprehensive introduction to cloud computing concepts and services in Sinhala.',
    videoId: 'qjbOGPp6lW0&t=117s',
    thumbnail:
      'https://i.ytimg.com/an_webp/qjbOGPp6lW0/mqdefault_6s.webp?du=3000&sqp=CPOogMcG&rs=AOn4CLCAlUESbpCnlh3d7987K6n0PzT89w',
    date: '2025-08-29',
    duration: '8:57',
    views: '33',
    likes: '4',
    tags: ['Cloud Computing', 'Cloud Concepts', 'Tutorial', 'Sinhala'],
    featured: true,
  },
  {
    title: 'Management Information System (MIS)- Lesson 1 - Part 1',
    description:
      'Detailed overview of Management Information Systems (MIS) and their role in organizations.',
    videoId: 'XbFsJXxxux4',
    thumbnail: 'https://img.youtube.com/vi/XbFsJXxxux4/maxresdefault.jpg',
    date: '2025-09-11',
    duration: '27:44',
    views: '636',
    likes: '12',
    tags: ['MIS', 'Management Information System', 'Information Systems'],
    featured: false,
  },
  {
    title: 'Management Information System (MIS)- Lesson 2 - Part 1',
    description:
      'In-depth exploration of MIS components, types, and their impact on business operations.',
    videoId: 'ZLeNYiw4c-I&t=1043s',
    thumbnail: 'https://img.youtube.com/vi/ZLeNYiw4c-I/maxresdefault.jpg',
    date: '2025-09-12',
    duration: '01:01:41',
    views: '430',
    likes: '11',
    tags: ['MIS', 'Management Information System', 'Information Systems'],
    featured: false,
  },
  {
    title: 'Introduction to AWS | සිංහලෙන් | Beginner Friendly Guide',
    description:
      'Beginner-friendly introduction to Amazon Web Services (AWS) in Sinhala.',
    videoId: 'RR2WsOAgA7Y&t=6s',
    thumbnail:
      'https://i.ytimg.com/an_webp/RR2WsOAgA7Y/mqdefault_6s.webp?du=3000&sqp=CN6kgMcG&rs=AOn4CLCfUMGjkc751GIPQG0Sv_yqrwRLyA',
    date: '2025-08-30',
    duration: '08:54',
    views: '35',
    likes: '3',
    tags: ['AWS', 'Amazon Web Services', 'Cloud Computing', 'Sinhala'],
    featured: false,
  },
];

export function YouTube() {
  const featuredVideo = videos.find((video) => video.featured);
  const otherVideos = videos.filter((video) => !video.featured);

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <ParticleSection
      id="youtube"
      className="py-20"
      variant="default"
      opacity={1}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              YouTube Content
            </h2>
            <p className="text-muted-foreground">
              Video tutorials and content creation on tech topics
            </p>
          </div>

          {/* Featured Video */}
          {featuredVideo && (
            <Card className="glass-hover overflow-hidden mb-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Featured Thumbnail */}
                <div
                  className="relative h-64 md:h-auto overflow-hidden cursor-pointer group"
                  onClick={() => openVideo(featuredVideo.videoId)}
                >
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center glow-box-primary group-hover:scale-110 transition-transform">
                      <Play
                        className="h-10 w-10 text-white ml-1"
                        fill="white"
                      />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <Badge className="absolute bottom-4 right-4 bg-black/80">
                    {featuredVideo.duration}
                  </Badge>
                  <Badge className="absolute top-4 left-4 bg-primary glow-box-primary">
                    Featured
                  </Badge>
                </div>

                {/* Featured Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredVideo.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {featuredVideo.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredVideo.date).toLocaleDateString(
                        'en-US',
                        {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredVideo.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      {featuredVideo.likes}
                    </span>
                  </div>

                  <Button
                    variant="default"
                    onClick={() => openVideo(featuredVideo.videoId)}
                  >
                    Watch Video
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Other Videos Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherVideos.map((video, index) => (
              <Card
                key={video.title}
                className="glass-hover overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openVideo(video.videoId)}
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-box-primary group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-xs">
                    {video.duration}
                  </Badge>
                </div>

                {/* Video Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="h-3 w-3" />
                      {video.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(video.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 animate-fade-in">
            <Button variant="neon" asChild>
              <a
                href="https://www.youtube.com/@savinduamalka"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Videos on YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
