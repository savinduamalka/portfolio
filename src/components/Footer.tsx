import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: "https://github.com/savinduamalka", label: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com/in/savindu-amalka-698317235", label: "LinkedIn" },
    { icon: Youtube, url: "https://youtube.com/@savinduamalka", label: "YouTube" },
    { icon: Mail, url: "mailto:savinduamalka@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3 glow-primary">Savindu Amalka</h3>
              <p className="text-sm text-muted-foreground">
                Unlocking tomorrow's possibilities, one byte at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {["Education", "Skills", "Projects", "Blogs", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider">Connect</h4>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, url, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:glow-box-primary transition-all"
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Savindu Amalka. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-primary">React</span>, <span className="text-primary">TypeScript</span> & <span className="text-primary">shadcn/ui</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
}
