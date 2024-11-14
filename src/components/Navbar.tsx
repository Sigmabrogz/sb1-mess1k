import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { AddProjectModal } from './AddProjectModal';

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5">
        <div className="max-w-7xl mx-auto px-layout h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow"></div>
            <h1 className="text-heading font-semibold bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
              De AI Project Map
            </h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-accent-purple hover:bg-accent-purple/90 text-white 
                     rounded-lg transition-all duration-hover border border-white/10 hover:border-white/20
                     hover:shadow-glow transform hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span className="text-body font-medium">Add Your Project</span>
          </button>
        </div>
      </nav>
      <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}