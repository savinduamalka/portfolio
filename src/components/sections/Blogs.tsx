import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ParticleSection } from "@/components/ParticleSection";

const blogs = [
  {
    title: "Linux Remote Access Demystified: A Beginner’s Journey from RDP to SSH",
    excerpt: "Learn how to securely access Linux servers remotely using SSH, overcoming common challenges faced by beginners.",
    date: "2025-09-23",
    readTime: "5 min read",
    tags: ["Linux", "SSH", "Remote Access","RDP","Windows"],
    featured: true,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Kt2ISrCeVoSMDKA1Sd9KYQ.png",
    link: "https://medium.com/@savinduamalka/linux-remote-access-demystified-a-beginners-journey-from-rdp-to-ssh-46c165f0db77",
  },
  {
    title: "AWS EC2 Instance Types",
    excerpt: "Learn about the different types of AWS EC2 instances and how to choose the right one for your application.",
    date: "2025-08-20",
    readTime: "3 min read",
    tags: ["AWS", "EC2", "Cloud Computing"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pgrmrDmwCcCyUG6QnO0AJA.png",
    link: "https://medium.com/@savinduamalka/aws-ec2-instance-types-14d10b10ed3c",
  },
  {
    title: "Understanding Encryption: From Plain Text to Cipher Text",
    excerpt: "Explore the fundamentals of encryption, including symmetric and asymmetric techniques, and their applications in securing data.",
    date: "2025-08-05",
    readTime: "4 min read",
    tags: ["Encryption", "Security", "Cryptography"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*q-C3is3aF5k2n37oamPIPw.png",
    link: "https://medium.com/@savinduamalka/understanding-encryption-from-plain-text-to-cipher-text-814adbbc122b",
  },
  {
    title: "What is Kubernetes? A Beginner-Friendly Guide to Container Orchestration",
    excerpt: "A comprehensive guide to container orchestration using Kubernetes, covering key concepts and practical examples.",
    date: "2025-08-02",
    readTime: "5 min read",
    tags: ["Kubernetes", "Container Orchestration", "DevOps"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*TRlWT_YIgMf7eVIn9X2ySw.png",
    link: "https://medium.com/@savinduamalka/what-is-kubernetes-a-beginner-friendly-guide-to-container-orchestration-72c5f973abd4",
  },
   {
    title: "Understanding Database Security",
    excerpt: "Learn about the different types of database security measures and how to implement them effectively.",
    date: "2025-08-01",
    readTime: "4 min read",
    tags: ["Database", "Security", "Data Protection"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wSh_v5e2-PfljSk8uut3wA.png",
    link: "https://medium.com/@savinduamalka/understanding-database-security-02480faec67c",
  },
  {
    title: "Naturally Aspirated vs Turbocharged Engines",
    excerpt: "A detailed comparison of naturally aspirated and turbocharged engines, exploring their mechanics, advantages, and disadvantages.",
    date: "2025-07-30",
    readTime: "3 min read",
    tags: ["Encryption", "Security", "Cryptography"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1PrAvt2iQ-u8SW6iDHOUCg.png",
    link: "https://medium.com/@savinduamalka/naturally-aspirated-vs-turbocharged-engines-1dd74be67a1c",
  },
  {
    title: "Understanding Amazon EC2 Storage Options: Instance Store, EBS, and Snapshots",
    excerpt: "A comprehensive guide to Amazon EC2 storage options, including Instance Store, EBS, and Snapshots.",
    date: "2025-09-07",
    readTime: "4 min read",
    tags: ["AWS", "EC2", "Cloud Computing"],
    featured: false,
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ji4dpUKwetzgUzryIArDUA.png",
    link: "https://medium.com/@savinduamalka/understanding-amazon-ec2-storage-options-instance-store-ebs-and-snapshots-b9ba95d593fa",
  },
];

export function Blogs() {
  const featuredBlog = blogs.find((blog) => blog.featured);
  const otherBlogs = blogs.filter((blog) => !blog.featured);

  return (
    <ParticleSection id="blogs" className="py-20" variant="colorful" opacity={1}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Blog & Articles
            </h2>
            <p className="text-muted-foreground">
              Thoughts, tutorials, and insights on web development
            </p>
          </div>

          {/* Featured Article */}
          {featuredBlog && (
            <Card className="glass-hover overflow-hidden mb-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Featured Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary glow-box-primary">
                    Featured
                  </Badge>
                </div>

                {/* Featured Content */}
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {featuredBlog.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{featuredBlog.title}</h3>
                  <p className="text-muted-foreground mb-4">{featuredBlog.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredBlog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <Button variant="default" asChild>
                    <a href={featuredBlog.link} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Other Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherBlogs.map((blog, index) => (
              <Card
                key={blog.title}
                className="glass-hover overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {blog.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  <Button variant="ghost" size="sm" asChild className="w-full">
                    <a href={blog.link} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8 animate-fade-in">
            <Button variant="neon" asChild>
              <a href="https://medium.com/@savinduamalka" target="_blank" rel="noopener noreferrer">
                View All Articles on Medium
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ParticleSection>
  );
}
