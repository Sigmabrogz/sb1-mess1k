import React from 'react';

interface SubsectionProps {
  title: string;
  items: string[];
}

interface MapSectionProps {
  title: string;
  subsections: SubsectionProps[];
}

export function MapSection({ title, subsections }: MapSectionProps) {
  return (
    <section className="glass-card rounded-card border border-white/5 transition-all duration-hover">
      <h2 className="text-heading font-medium px-layout py-2 border-b border-white/5 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow"></span>
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-[1px] p-[1px]">
        {subsections.map((subsection) => (
          <div 
            key={subsection.title} 
            className="bg-background/50 backdrop-blur-sm flex flex-col min-w-[110px]"
          >
            <h3 className="text-accent-purple font-medium text-body px-3 py-2 border-b border-white/5">
              {subsection.title}
            </h3>
            <div className="flex flex-wrap gap-2 p-3 content-start min-h-[24px]">
              {subsections.length === 0 ? (
                <div className="text-xs text-text-secondary italic">No projects yet</div>
              ) : (
                subsection.items.map((item) => (
                  <div
                    key={item}
                    className="bg-card/80 px-3 py-1.5 rounded-lg text-body leading-none
                             hover:bg-card hover:scale-105 transition-all duration-hover cursor-pointer 
                             text-text-primary hover:text-white border border-white/5 hover:border-white/10
                             hover:shadow-glow whitespace-nowrap animate-fade-in"
                  >
                    {item}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}