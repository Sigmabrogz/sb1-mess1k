import React from 'react';
import { ZoomIn, ZoomOut, Move } from 'lucide-react';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export function ZoomControls({ onZoomIn, onZoomOut }: ZoomControlsProps) {
  return (
    <div className="fixed top-layout right-layout z-50 flex gap-2">
      <button
        onClick={onZoomIn}
        className="p-2 glass-card hover:bg-card/80 rounded-lg transition-all duration-hover
                 border border-white/5 hover:border-white/10 hover:shadow-glow transform hover:scale-105"
        title="Zoom In"
      >
        <ZoomIn className="w-5 h-5 text-accent-purple" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 glass-card hover:bg-card/80 rounded-lg transition-all duration-hover
                 border border-white/5 hover:border-white/10 hover:shadow-glow transform hover:scale-105"
        title="Zoom Out"
      >
        <ZoomOut className="w-5 h-5 text-accent-purple" />
      </button>
      <div className="p-2 glass-card rounded-lg border border-white/5">
        <Move className="w-5 h-5 text-accent-yellow" />
      </div>
    </div>
  );
}