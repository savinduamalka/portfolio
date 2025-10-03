import { useState } from "react";
import { Mail, Copy, Send, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CONTACT_EMAIL = "savinduamalka@gmail.com"; 

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=Hello from Portfolio&body=Hi Savindu,%0D%0A%0D%0A`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-primary">
              Get In Touch
            </h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>
          </div>

          {/* Contact Card */}
          <Card className="glass-hover p-8 text-center animate-scale-in">
            {/* Email Icon */}
            <div className="mb-6 inline-block">
              <div className="p-6 rounded-full bg-primary/10 glow-box-primary inline-block">
                <Mail className="h-12 w-12 text-primary" />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2">Email me at</p>
              <p className="text-xl md:text-2xl font-bold text-primary glow-primary break-all">
                {CONTACT_EMAIL}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={handleSendEmail}
                className="w-full sm:w-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Email
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto"
                disabled={copied}
              >
                {copied ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">or connect on</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/savindu-amalka-698317235", color: "#0077B5" },
                { name: "GitHub", url: "https://github.com/savinduamalka", color: "#333" },
                { name: "Medium", url: "https://medium.com/@savinduamalka", color: "#00AB6C" },
                { name: "YouTube", url: "https://youtube.com/@savinduamalka", color: "#FF0000" },
              ].map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  asChild
                  className="hover:glow-box-primary transition-all"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
            <p>Available for freelance projects and full-time opportunities</p>
            <p className="mt-2">Response time: Usually within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
