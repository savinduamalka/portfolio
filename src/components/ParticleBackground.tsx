import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  hue: number;
  connections: number;
}

interface ParticleBackgroundProps {
  variant?: 'default' | 'colorful' | 'minimal' | 'dense';
  interactive?: boolean;
  showConnections?: boolean;
  opacity?: number;
  isActive?: boolean;
}

export function ParticleBackground({
  variant = 'default',
  interactive = true,
  showConnections = true,
  opacity = 0.8,
  isActive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationFrameRef = useRef<number>();
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      return false;
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Safari < 14
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const stopAnimation = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
    };

    if (!isActive || prefersReducedMotion) {
      stopAnimation();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    // Responsive particle count based on variant
    const isMobile = window.innerWidth < 768;
    const particleCounts = {
      default: isMobile ? 28 : 70,
      colorful: isMobile ? 34 : 85,
      minimal: isMobile ? 12 : 32,
      dense: isMobile ? 38 : 95,
    };
    const particleCount = particleCounts[variant];
    const maxDistance = isMobile ? 90 : 130;

    const updateCanvasDimensions = () => {
      const parentBounds =
        canvas.parentElement?.getBoundingClientRect() ??
        ({ width: window.innerWidth, height: window.innerHeight } as const);
      const dpr = window.devicePixelRatio || 1;
      dimensionsRef.current = {
        width: Math.max(parentBounds.width, 1),
        height: Math.max(parentBounds.height, 1),
      };

      const { width, height } = dimensionsRef.current;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeCanvas = () => {
      updateCanvasDimensions();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const { width, height } = dimensionsRef.current;
      if (!width || !height) {
        return;
      }
      for (let i = 0; i < particleCount; i++) {
        const speed = variant === 'minimal' ? 0.3 : 0.5;
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius:
            variant === 'minimal'
              ? Math.random() * 1.5 + 0.5
              : Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.5,
          hue: variant === 'colorful' ? Math.random() * 360 : 280, // Purple hue for default
          connections: 0,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, isActive: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { ...mouseRef.current, isActive: false };
    };

    const animate = () => {
      const { width, height } = dimensionsRef.current;
      if (!width || !height) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Reset connection counts
      particlesRef.current.forEach((p) => (p.connections = 0));

      const now = Date.now() * 0.001;

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction (attraction and repulsion)
        if (interactive && mouseRef.current.isActive) {
          const rect = canvas.getBoundingClientRect();
          const mouseX = mouseRef.current.x - rect.left;
          const mouseY = mouseRef.current.y - rect.top;
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const force = (200 - distance) / 200;
            // Repulsion when very close, attraction when moderately close
            if (distance < 100) {
              particle.vx -= (dx / distance) * force * 0.4;
              particle.vy -= (dy / distance) * force * 0.4;
            } else {
              particle.vx += (dx / distance) * force * 0.2;
              particle.vy += (dy / distance) * force * 0.2;
            }
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Add slight random movement for organic feel
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxSpeed = 2;
        const speed = Math.sqrt(particle.vx ** 2 + particle.vy ** 2);
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed;
          particle.vy = (particle.vy / speed) * maxSpeed;
        }

        // Boundaries with smooth bounce
        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }

        // Animate opacity for twinkling effect
        if (variant === 'colorful') {
          particle.opacity = 0.5 + Math.sin(now + i) * 0.3;
          particle.hue = (particle.hue + 0.1) % 360;
        }

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3
        );

        const particleColor =
          variant === 'colorful'
            ? `hsl(${particle.hue}, 80%, 60%)`
            : 'rgba(255, 255, 255, 0.9)';

        gradient.addColorStop(0, particleColor);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          variant === 'colorful'
            ? `hsla(${particle.hue}, 80%, 60%, ${particle.opacity})`
            : `rgba(255, 255, 255, ${particle.opacity * 0.8})`;
        ctx.fill();

        // Add glow
        if (variant !== 'minimal') {
          ctx.shadowBlur = 10;
          ctx.shadowColor = particleColor;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Draw connections (network lines)
        if (showConnections) {
          particlesRef.current.slice(i + 1).forEach((otherParticle) => {
            const dx = otherParticle.x - particle.x;
            const dy = otherParticle.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              particle.connections++;
              otherParticle.connections++;

              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);

              const lineOpacity = (1 - distance / maxDistance) * 0.4;

              if (variant === 'colorful') {
                const avgHue = (particle.hue + otherParticle.hue) / 2;
                ctx.strokeStyle = `hsla(${avgHue}, 80%, 60%, ${lineOpacity})`;
              } else {
                ctx.strokeStyle = `rgba(120, 24, 63, ${lineOpacity})`;
              }

              ctx.lineWidth = variant === 'dense' ? 0.5 : 1;
              ctx.stroke();

              // Draw connection points at intersections for dense variant
              if (variant === 'dense' && particle.connections > 3) {
                const midX = (particle.x + otherParticle.x) / 2;
                const midY = (particle.y + otherParticle.y) / 2;
                ctx.beginPath();
                ctx.arc(midX, midY, 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(120, 24, 63, ${lineOpacity * 2})`;
                ctx.fill();
              }
            }
          });
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };
    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }
    animationFrameRef.current = requestAnimationFrame(animate);

    // Pause when tab not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [variant, interactive, showConnections, isActive, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity, pointerEvents: 'none' }}
    />
  );
}
