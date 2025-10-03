import { Download, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleBackground } from './ParticleBackground';
import heroSpaceBg from '@/assets/hero-space-bg.jpg';

export function Hero() {
  const animateText = (text: string) => {
    const words = text.split(' ');
    let letterIndex = 0;
    const letters = text.replace(/ /g, '').length;

    return words.map((word, wordIdx) => {
      const wordLetters = word.split('').map((letter, letterIdx) => {
        const currentIndex = letterIndex++;
        const animationDelay = (currentIndex / letters) * 8;

        return (
          <span
            key={`${wordIdx}-${letterIdx}`}
            className="inline-block animate-letter-wave"
            style={{
              animationDelay: `${animationDelay}s`,
            }}
          >
            {letter}
          </span>
        );
      });

      return (
        <span key={wordIdx} className="inline-block">
          {wordLetters}
          {wordIdx < words.length - 1 && <span>&nbsp;</span>}
        </span>
      );
    });
  };

  const summaryText =
    'Enthusiastic and fast-learning IT undergraduate with a strong academic record, actively seeking an Internship to gain hands-on industry experience and apply foundational technical skills in a real-world setting. Proficient in core technologies including Linux, Docker, Git, and cloud platforms, alongside programming expertise and collaborative project work, with a keen interest in web technologies and emerging IT trends.';

  const handleViewCV = () => {
    // Open CV in new tab for viewing
    window.open('/cv.pdf', '_blank');
  };

  const handleDownloadCV = () => {
    // Trigger download
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Savindu_Amalka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSpaceBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Particle Network */}
      <ParticleBackground variant="colorful" interactive={true} opacity={1} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Photo in Corner - Fixed Position */}
        <div className="hidden lg:block fixed right-0 bottom-0 z-20 animate-slide-up">
          <div className="relative">
            {/* Photo */}
            <div className="relative w-[400px] xl:w-[450px] 2xl:w-[500px] h-auto">
              <img
                src="/myphoto.png"
                alt="Savindu Amalka"
                className="w-full h-full object-contain object-bottom filter drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 40px rgba(0, 0, 0, 0.3))' }}
              />
            </div>

            {/* Floating particles around photo */}
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full animate-float glow-box-primary"
              style={{ animationDuration: '3s', animationDelay: '0s' }}
            />
            <div
              className="absolute top-20 right-20 w-1.5 h-1.5 bg-neon-secondary rounded-full animate-float glow-box-secondary"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />
            <div
              className="absolute bottom-32 left-16 w-2.5 h-2.5 bg-primary rounded-full animate-float glow-box-primary"
              style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
            />
          </div>
        </div>

        {/* Centered Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Greeting */}
          <div className="mb-8 animate-slide-up pt-20 lg:pt-0">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full text-2xl md:text-3xl font-semibold text-primary glow-primary">
              <span
                className="inline-block animate-wave text-3xl md:text-4xl"
                style={{ transformOrigin: '70% 70%' }}
              >
                👋
              </span>
              <span>Hi, I'm</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 glow-primary animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Savindu Amalka
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Unlocking tomorrow's possibilities,{' '}
            <span className="text-neon-secondary font-semibold glow-secondary">
              one byte at a time.
            </span>
          </p>

          {/* Summary */}
          <div
            className="text-base md:text-lg mb-10 max-w-7xl mx-auto animate-slide-up relative"
            style={{ animationDelay: '0.4s' }}
          >
            {/* Animated cosmic background glow */}
            <div
              className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-neon-secondary/20 to-primary/10 blur-2xl opacity-60 animate-pulse"
              style={{ animationDuration: '3s' }}
            />
            <div
              className="absolute -inset-4 bg-gradient-to-l from-neon-secondary/10 via-primary/20 to-neon-secondary/10 blur-2xl opacity-40 animate-pulse"
              style={{ animationDuration: '4s', animationDelay: '1s' }}
            />

            {/* Text content with jumping letter wave animation */}
            <p className="relative leading-relaxed text-center text-muted-foreground px-4 md:px-8">
              {animateText(summaryText)}
            </p>

            {/* Continuous floating star particles */}
            <div
              className="absolute top-2 left-8 w-1.5 h-1.5 bg-primary rounded-full animate-float glow-box-primary"
              style={{ animationDuration: '3s', animationDelay: '0s' }}
            />
            <div
              className="absolute top-8 right-12 w-1 h-1 bg-neon-secondary rounded-full animate-float glow-box-secondary"
              style={{ animationDuration: '4s', animationDelay: '0.5s' }}
            />
            <div
              className="absolute bottom-10 left-16 w-1 h-1 bg-primary rounded-full animate-float glow-box-primary"
              style={{ animationDuration: '5s', animationDelay: '1s' }}
            />
            <div
              className="absolute bottom-4 right-20 w-1.5 h-1.5 bg-neon-secondary rounded-full animate-float glow-box-secondary"
              style={{ animationDuration: '3.5s', animationDelay: '1.5s' }}
            />
            <div
              className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-primary rounded-full animate-float glow-box-primary"
              style={{ animationDuration: '4.5s', animationDelay: '2s' }}
            />
            <div
              className="absolute top-1/3 right-6 w-0.5 h-0.5 bg-neon-secondary rounded-full animate-float glow-box-secondary"
              style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}
            />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <Button
              variant="hero"
              size="lg"
              onClick={handleViewCV}
              className="w-full sm:w-auto"
            >
              <Eye className="mr-2 h-5 w-5" />
              View CV
            </Button>

            <Button
              variant="glass"
              size="lg"
              onClick={handleDownloadCV}
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>

            <Button
              variant="neon"
              size="lg"
              onClick={scrollToProjects}
              className="w-full sm:w-auto"
            >
              See Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-float">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto relative">
              <div className="w-1.5 h-2 bg-primary rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
