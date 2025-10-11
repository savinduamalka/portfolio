import { Heart, Users, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ParticleSection } from '@/components/ParticleSection';

const volunteering = [
  {
    organization: 'Fit Moments',
    role: 'Photographer',
    period: '2023 Sep - 2024 Oct',
    location: 'University of Moratuwa',
    description:
      'Actively contributed to the Faculty Photography Club by organizing events, and capturing high-quality images for campus activities. Collaborated with team members to promote creativity and enhance club engagement. Developed skills in event planning, teamwork, and visual storytelling.',
    impact:
      'Participated 5+ successful photography events, actively engaged in club activities',
    tags: ['Photography', 'Photo Editing', 'Lightroom'],
    image:
      '/fitmoment.jpeg',
  },
];

export function Volunteering() {
  return (
    <ParticleSection
      id="volunteering"
      className="py-20"
      variant="minimal"
      opacity={1}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Community & Volunteering
            </h2>
            <p className="text-muted-foreground">
              Giving back to the tech community through education and open
              source
            </p>
          </div>

          {/* Volunteering Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {volunteering.map((activity, index) => (
              <Card
                key={activity.organization}
                className="glass-hover overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.organization}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 p-3 rounded-full glass glow-box-primary">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {activity.organization}
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      {activity.role}
                    </p>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {activity.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {activity.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>

                  {/* Impact */}
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-primary">
                        {activity.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center glass p-8 rounded-lg animate-slide-up">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4 glow-box-primary" />
            <h3 className="text-xl font-bold mb-2">
              Interested in Collaboration?
            </h3>
            <p className="text-muted-foreground mb-4">
              I'm always looking for opportunities to contribute to meaningful
              projects and help others grow.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:underline font-medium"
            >
              Let's connect →
            </a>
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
