import React from 'react';

export function ParallaxElement({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-fixed bg-center bg-cover transform translate-y-0 motion-safe:group-hover:translate-y-1/4 transition-transform duration-1000 ease-out">
        {children}
      </div>
    </div>
  );
}