import { useState } from 'react';
import { ExternalLink, Github, Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { profile } from 'console';
import { title } from 'process';
import { ParticleSection } from '@/components/ParticleSection';

const projects = [
  {
    title: 'Agni Online Store (E- Commerce Web App)',
    description:
      'Developing a full-featured e-commerce platform with Google login, product filtering, cart, order tracking, OTP-based email verification, password recovery, and product reviews. Admin dashboard enables management of users, products, inventory, and orders. Payment gateway integration is in progress.',
    longDescription:
      'A comprehensive e-commerce platform built with modern web technologies. Features include Google login, product filtering, cart, order tracking, OTP-based email verification, password recovery, product reviews, secure payment integration with Genie, admin dashboard for managing products and orders, customer authentication, shopping cart functionality, and responsive design for all devices.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Supabase'],
    image: '/agnionlinestore.png',
    github: 'https://github.com/savinduamalka/agni-e-commerce-frontend.git',
    demo: 'https://agni-e-commerce-frontend.vercel.app/',
    category: 'Full-Stack',
  },
  {
    title: 'Hotel Booking System- Blue Horizon Galle',
    description:
      'Hotel booking web application with room search, booking management, and user authentication.',
    longDescription:
      'Built a hotel booking platform with secure auth, real-time room availability, booking management, hotel galleries, user reviews, subscription, and an admin panel for managing rooms, reservations, pricing, and users.',
    tags: ['MERN', 'Github Actions', 'EC2', 'nginx', 'Supabase'],
    image: '/bluehorizon.png',
    github: 'https://github.com/savinduamalka/Hotel-Management-front-end.git',
    demo: 'https://www.bluehorizongalle.app/',
    category: 'Full-Stack',
  },
  {
    title: 'AutoMobile SL (E- Commerce Web App)',
    description:
      'E-commerce platform for buying and selling vehicles with user authentication and payment integration.',
    longDescription:
      'Developed a full-stack e-commerce platform for the automobile sector with secure auth, category-based product browsing, cart & checkout, order tracking, and an admin dashboard for managing users, products, and orders.',
    tags: ['Laravel', 'React', 'Docker', 'My SQL'],
    image: '/automobilesl.png',
    github: 'https://github.com/savinduamalka/E-Commerce-backend-laravel.git',
    demo: 'https://e-commerce-frontend-ruddy-ten.vercel.app/',
    category: 'Full-Stack',
  },
  {
    title: 'Database and Middleware Management System',
    description:
      'Tender and employee management system with secure authentication and dynamic filtering.',
    longDescription:
      'Built a web-based system to manage employees and tender documents, featuring secure authentication, dynamic employee filtering, profile management, automated matching of employees to tender requirements and user settings for profile updates.',
    tags: ['Next JS', 'PostgreSQL', 'Prisma', 'Docker', 'Minio'],
    image: '/mit.png',
    github: 'https://github.com/savinduamalka/database-middleware-system.git',
    demo: 'https://drive.google.com/drive/folders/1gVkUSUmnfv9i3KaGupRBagcXTOP_CFIv?usp=drive_link',
    category: 'Full-Stack',
  },
  {
    title: 'TechBar- Automated Bartender Machine',
    description:
      'Beautiful weather app with forecasts, maps, and personalized alerts.',
    longDescription:
      'Developed an Arduino-based automated bartender system with precision tray positioning, glass detection, and interactive recipe customization. Integrated motorized axis control, real-time notifications, and auto-reset for smooth and reliable operation.',
    tags: ['C++', 'Arduino', 'Motor Control', 'Input reading Sensors'],
    image: '/bartender.jpeg',
    github: 'https://github.com/savinduamalka/Automated-Cocktail-Machine.git',
    demo: 'https://drive.google.com/drive/folders/117Wkj9VoflUf7XEeaCrpSDuz4EhjsbW0?usp=drive_link',
    category: 'IoT',
  },
  {
    title: 'SkillSwap Marketplace- Ongoing',
    description:
      'A platform for users to exchange skills and services, fostering community engagement and collaboration.',
    longDescription:
      'A web-based platform for skill exchange. Users can earn and spend platform credits to access learning opportunities. Key features include skill-searching, real-time chat, ratings & reviews, personalized AI-generated learning paths, and an admin panel for moderation.',
    tags: ['Next JS', 'Node JS', 'WebSockets', 'Supabase', 'PostgreSQL'],
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    github: '',
    demo: '',
    category: 'Full-Stack',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website to showcase projects and skills.',
    longDescription:
      'Features include a project gallery, skill showcase, and contact form.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    image: '/portfolio.png',
    github: 'https://github.com/savinduamalka/portfolio.git',
    demo: '',
    category: 'Frontend',
  },
  {
    title: 'Spirit11',
    description:
      'Admin Credentials: Username: savinduamalka, Password: Savindu@123.',
    longDescription:
      'Developed a real-time fantasy sports web app for a hackathon, featuring admin and user panels with role-based authentication. The system includes player stats management, team selection with budget tracking, dynamic leaderboard, and live updates across both interfaces.',
    tags: ['Node', 'React', 'MongoDB'],
    image: '/vertex.png',
    github: 'https://github.com/savinduamalka/SpiritX_Vertex_02.git',
    demo: 'https://spirit-x-vertex-02.vercel.app',
    category: 'Full-Stack',
  },
    {
    title: 'Python Chatbot',
    description:
      'AI-powered chatbot using large language models with API integration.',
    longDescription:
      'This project is a lightweight AI chatbot built in Python that leverages large language models via API calls. It supports both OpenAI and Hugging Face models, allowing flexible integration with popular LLMs for conversational applications.',
    tags: ['Python', 'OpenAI', 'Chatbot'],
    image: '/chatbot.jpeg',
    github: 'https://github.com/savinduamalka/python-chatbot.git',
    demo: '',
    category: 'Backend',
  },
    {
    title: 'Music Blog',
    description:
      'Manage music albums, songs, artist, with secure login',
    longDescription:
      'A web application for managing music collections, allowing users to create, edit, and delete albums and songs. Features include secure user authentication, album artwork uploads, and a responsive design.',
    tags: ['Laravel', 'MySQL'],
    image: '/musicblog.png',
    github: 'https://github.com/savinduamalka/music-blog-laravel.git',
    demo: '',
    category: 'Backend',
  },
  {
    title: 'Authentication System',
    description:
      'Secure user authentication with JWT, password hashing.',
    longDescription:
      'A robust authentication system built with Node.js and Express, featuring JWT-based session management, bcrypt password hashing, and secure login and registration endpoints. Designed for easy integration into web applications.',
    tags: ['React', 'Node','MongoDB', 'JWT'],
    image: '/auth.png',
    github: 'https://spirit-x-vertex-01.vercel.app',
    demo:'https://spirit-x-vertex-01-git-main-savindu-amalkas-projects.vercel.app',
    category: 'Full-Stack',
  },
    {
    title: 'POS System- Frontend',
    description:
      'Signup, login, Contact us, Pos Dashboard, Products, Cart, Sales, and Cahier pages',
    longDescription:
      '',
    tags: ['React', 'Tailwind'],
    image: '/pos.png',
    github: 'https://github.com/savinduamalka/pos-system-front-end.git',
    demo:'https://pos-system-front-end.vercel.app',
    category: 'Frontend',
  },
      {
    title: 'Student-Marks-Manager',
    description:
      'A Java application for managing GDSE students marks.',
    longDescription:
      'A Java application for managing GDSE students marks. The project demonstrates the use of Java fundamentals. Each GDSE student has a unique student ID. In the first semester, students must complete two mandatory modules, such as Programming Fundamentals and Database Management Systems. This application tracks the exam marks for these modules at the end of the semester. There is a Command Line Interface, can enter an option to continue in this application. Here are the options that in Command Line Interface, such as Add Student, Add Marks, Update Marks, Delete Marks, Search Marks, and View All Students Marks, Print Student Ranks, Best in Programming Fundamentals',
    tags: ['Java', 'OOP'],
    image: '/gdse.png',
    github: 'https://github.com/savinduamalka/GDSE-Student-Marks-Manager.git',
    demo:'',
    category: 'Backend',
  },
        {
    title: 'Movie Finder App',
    description:
      'A web app to search for movies using the OMDB API.',
    longDescription:
      'Using the OMDB API, this app allows users to search for movie details like title, year, ratings, director name, and more, all with a sleek interface. This is a fully responsive web app that is built using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: '/moviefinder.png',
    github: 'https://github.com/savinduamalka/Movie-Finder-App.git',
    demo:'',
    category: 'Full-Stack',
  }

];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'IoT'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <ParticleSection
      id="projects"
      className="py-20"
      variant="dense"
      opacity={1}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Featured Projects
            </h2>
            <p className="text-muted-foreground">
              A showcase of my recent work and side projects
            </p>
          </div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Category Filters */}
            <div
              className="flex flex-wrap justify-center gap-2 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'ghost'}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search Bar */}
            <div
              className="max-w-md mx-auto animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="glass-hover overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    )}
                    {project.demo && (
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Full Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    About this project
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {selectedProject.demo && (
                  <Button variant="default" asChild className="flex-1">
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  )}
                  {selectedProject.github && (
                  <Button variant="outline" asChild className="flex-1">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </a>
                  </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </ParticleSection>
  );
}
