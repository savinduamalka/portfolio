import { ReactNode } from 'react';
import { ParticleBackground } from './ParticleBackground';

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
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {/* Particle Network Background */}
      <ParticleBackground
        variant={variant}
        interactive={interactive}
        showConnections={showConnections}
        opacity={opacity}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
