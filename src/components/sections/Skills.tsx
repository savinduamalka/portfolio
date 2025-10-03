import { useState } from 'react';
import {
  Layout,
  Server,
  Database,
  Zap,
  Palette,
  Code,
  Wrench,
  Users,
  Briefcase,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ParticleSection } from '@/components/ParticleSection';

const skillCategories = [
  {
    category: 'Programming',
    icon: Code,
    skills: [
      {
        name: 'C',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        name: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
    ],
  },
  {
    category: 'Frontend',
    icon: Layout,
    skills: [
      {
        name: 'React',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Next.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'HTML5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      {
        name: 'Node.js',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    skills: [
      {
        name: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'Supabase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      },
      {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: Zap,
    skills: [
      {
        name: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      },
      {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
      {
        name: 'AWS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      },
      {
        name: 'Oracle Cloud',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      },
      {
        name: 'GitHub Actions',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg',
      },
      {
        name: 'Nginx',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
      },
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: [
      {
        name: 'Firebase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      },
      {
        name: 'Supabase',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
      },
      {
        name: 'VS Code',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      },
      {
        name: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      },
    ],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: [
      {
        name: 'Leadership',
        logo: 'https://cdn-icons-png.flaticon.com/512/1705/1705312.png',
      },
      {
        name: 'Team Collaboration',
        logo: 'https://cdn-icons-png.flaticon.com/512/1534/1534938.png',
      },
      {
        name: 'Time Management',
        logo: 'https://cdn-icons-png.flaticon.com/512/2972/2972531.png',
      },
      {
        name: 'Teaching',
        logo: 'https://cdn-icons-png.flaticon.com/512/3976/3976625.png',
      },
    ],
  },
  {
    category: 'Professional Skills',
    icon: Briefcase,
    skills: [
      {
        name: 'REST APIs',
        logo: 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png',
      },
      {
        name: 'Web Sockets',
        logo: 'https://cdn-icons-png.flaticon.com/512/2165/2165061.png',
      },
      {
        name: 'UML Diagrams',
        logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
      },
      {
        name: 'Agile/Scrum',
        logo: 'https://cdn-icons-png.flaticon.com/512/4727/4727266.png',
      },
      {
        name: 'Performance Optimization',
        logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920349.png',
      },
      {
        name: 'SEO',
        logo: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
      },
      {
        name: 'Responsive Design',
        logo: 'https://cdn-icons-png.flaticon.com/512/2721/2721666.png',
      },
    ],
  },
];

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', ...skillCategories.map((cat) => cat.category)];

  const filteredCategories =
    activeFilter === 'All'
      ? skillCategories
      : skillCategories.filter((cat) => cat.category === activeFilter);

  return (
    <ParticleSection id="skills" className="py-20" variant="default" opacity={1}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-2 mb-12 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'ghost'}
                onClick={() => setActiveFilter(filter)}
                size="sm"
                className="transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.category}
                  className="glass-hover p-6 animate-scale-in"
                  style={{ animationDelay: `${catIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10 glow-box-primary">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.category}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="group relative flex flex-col items-center justify-center p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-default animate-scale-in"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        {/* Logo */}
                        <div className="relative w-16 h-16 mb-3 transition-transform duration-300 group-hover:scale-110">
                          <img
                            src={skill.logo}
                            alt={`${skill.name} logo`}
                            className="w-full h-full object-contain filter drop-shadow-lg dark:brightness-100 brightness-90"
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          {/* Glow effect on hover */}
                          <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                        </div>

                        {/* Skill Name */}
                        <span className="text-sm font-medium text-center text-foreground/80 group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
