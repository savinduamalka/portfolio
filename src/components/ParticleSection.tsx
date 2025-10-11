import { ReactNode, useEffect, useState } from 'react';
import { ParticleBackground } from './ParticleBackground';
import { useInViewport } from '@/hooks/use-in-viewport';
import { cn } from '@/lib/utils';

interface ParticleSectionProps {
  children: ReactNode;
  variant?: 'default' | 'colorful' | 'minimal' | 'dense';
  interactive?: boolean;
  showConnections?: boolean;
  opacity?: number;
  className?: string;
  id?: string;
}

export function ParticleSection({
  children,
  variant = 'default',
  interactive = true,
  showConnections = true,
  opacity = 0.4,
  className = '',
  id,
}: ParticleSectionProps) {
  const { ref, isVisible } = useInViewport<HTMLElement>({
    threshold: 0.2,
    rootMargin: '0px 0px -20% 0px',
  });
  const [hasEntered, setHasEntered] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setHasEntered(true);
    }
  }, [isVisible]);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'relative overflow-hidden transition-all duration-700 ease-out transform-gpu will-change-transform',
        className,
        hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
    >
      {/* Particle Network Background */}
      {hasEntered && (
        <ParticleBackground
          variant={variant}
          interactive={interactive && isVisible}
          showConnections={showConnections}
          opacity={opacity}
          isActive={isVisible}
        />
      )}

      {/* Content */}
      <div
        className={cn(
          'relative z-10 transition-all duration-700 ease-out transform-gpu will-change-transform',
          hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}
      >
        {children}
      </div>
    </section>
  );
}
