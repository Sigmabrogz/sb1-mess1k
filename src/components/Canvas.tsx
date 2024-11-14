import React from 'react';
import { MapSection } from './MapSection';
import { useProjectStore } from '../store/projectStore';

interface CanvasProps {
  scale: number;
  position: { x: number; y: number };
  isDragging: boolean;
}

export function Canvas({ scale, position, isDragging }: CanvasProps) {
  const sections = useProjectStore((state) => state.sections);

  return (
    <div
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
        transition: isDragging ? 'none' : 'transform 0.1s ease-out'
      }}
      className="relative will-change-transform"
    >
      <div className="w-[2400px] select-none">
        <div className="grid gap-[1px]">
          {sections.map((section) => (
            <MapSection
              key={section.title}
              title={section.title}
              subsections={section.subsections}
            />
          ))}
        </div>
      </div>
    </div>
  );
}