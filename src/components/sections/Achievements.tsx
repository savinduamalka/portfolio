import { Trophy, Award, Star, Eye, ExternalLink, Linkedin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Certificate } from 'crypto';
import { ParticleSection } from '@/components/ParticleSection';

const achievements = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services',
    date: '2025 August',
    icon: Award,
    description:
      'Fundamental knowledge of AWS Cloud concepts, services, and security',
    certificate:
      'https://media.licdn.com/dms/image/v2/D562DAQHsJr_YK8_f-w/profile-treasury-document-cover-images_480/B56Zj2KUudG0BY-/0/1756476560576?e=1760122800&v=beta&t=pa2tR7DC_8vqoi0sZvcstiPeR3N-gcNd4NgnN95O1Dg',
    badge:
      'https://media.licdn.com/dms/image/v2/D562DAQHsJr_YK8_f-w/profile-treasury-document-cover-images_480/B56Zj2KUudG0BY-/0/1756476560576?e=1760122800&v=beta&t=pa2tR7DC_8vqoi0sZvcstiPeR3N-gcNd4NgnN95O1Dg',
  },
  {
    title: 'AWS Educate Introduction to Cloud 101',
    issuer: 'Amazon Web Services',
    date: '2025 August',
    icon: Award,
    description: 'Introduction to cloud computing and AWS services',
    certificate:
      'https://www.credly.com/badges/abf8e706-1884-45a4-885b-b6bb1b263417/linked_in_profile',
    badge:
      'https://images.credly.com/size/680x680/images/e51a8579-188d-4363-8ed1-12ad164ef57b/blob',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025 August',
    icon: Award,
    description: 'Certified in Oracle Cloud Infrastructure foundations',
    certificate:
      'https://catalog-education.oracle.com/ords/certview/sharebadge?id=EC8380A4684C46055C1A97AC5EB19F3389718BB8EECFEF60B11DF20757C1AF06',
    badge:
      'https://img-c.udemycdn.com/open-badges/v2/badge-class/1861878640/Oracle_Associates_Badge__1_17988208663218602.png',
  },
  {
    title: 'Multicloud Network Associate',
    issuer: 'Aviatrix',
    date: '2025 September',
    icon: Award,
    description:
      'Fundamental knowledge of multicloud networking concepts and Aviatrix platform',
    certificate:
      'https://www.credly.com/badges/2862e1c5-51f2-4424-9586-c9031384280a/linked_in_profile',
    badge:
      'https://images.credly.com/size/680x680/images/e3c001fd-161d-433a-a7a4-049556d6112d/blob',
  },
  {
    title: 'Crash Course: Docker For Absolute Beginners',
    issuer: 'KodeKloud',
    date: '2025 August',
    icon: Award,
    description:
      'Fundamental knowledge of Docker and containerization concepts',
    certificate:
      'https://learn.kodekloud.com/user/certificate/a952b9f0-a48c-4509-ac1e-0b4c0dfc9c03',
    badge:
      'https://learn.kodekloud.com/_next/image?url=https%3A%2F%2Fcertificates.kodekloud.com%2F82e020d7-17f8-4d01-b30d-7bd743cebd8e%2Fc4f8aa40-d06e-4731-b6bd-4221632df06c%2Fa952b9f0-a48c-4509-ac1e-0b4c0dfc9c03.jpg%3Ft%3D2025-08-01T08%3A28%3A18Z&w=1920&q=75',
  },
  {
    title: 'Crash Course: Kubernetes For Absolute Beginners',
    issuer: 'KodeKloud',
    date: '2025 August',
    icon: Award,
    description:
      'Fundamental knowledge of Kubernetes and container orchestration concepts',
    certificate:
      'https://learn.kodekloud.com/user/certificate/e2f01c5e-a5fa-4028-8126-2ada564ae7e8',
    badge:
      'https://learn.kodekloud.com/_next/image?url=https%3A%2F%2Fcertificates.kodekloud.com%2F82e020d7-17f8-4d01-b30d-7bd743cebd8e%2F2c52f2b1-b94a-467d-89da-a6317ba68b4f%2Fe2f01c5e-a5fa-4028-8126-2ada564ae7e8.jpg%3Ft%3D2025-08-02T04%3A54%3A39Z&w=1920&q=75',
  },
];

export function Achievements() {
  const handleViewCertificate = (certificate: string) => {
    window.open(certificate, '_blank');
  };

  return (
    <ParticleSection
      id="achievements"
      className="py-20"
      variant="minimal"
      opacity={1}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Achievements & Certifications
            </h2>
            <p className="text-muted-foreground">
              Recognition, awards, and professional certifications
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className="glass-hover p-6 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Badge Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={achievement.badge}
                      alt={achievement.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm glow-box-primary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <Badge variant="outline" className="mb-2">
                      {achievement.date}
                    </Badge>

                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>

                    <p className="text-sm font-medium text-muted-foreground">
                      {achievement.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      {achievement.certificate && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleViewCertificate(achievement.certificate!)
                          }
                          className="flex-1"
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {/* View All on LinkedIn Button */}
          <div className="text-center mt-8 animate-fade-in">
            <Button variant="neon" asChild>
              <a
                href="https://www.linkedin.com/in/savindu-amalka-698317235"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Certifications on LinkedIn
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-slide-up">
            {[
              { label: 'Certifications', value: '10+' },
              { label: 'Projects', value: '15+' },
              { label: 'Blogs', value: '20+' },
              { label: 'Content Creation', value: '10+' },
            ].map((stat, index) => (
              <Card
                key={stat.label}
                className="glass-hover p-6 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2 glow-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
