import React, { useRef, useEffect, useState } from 'react';
import { ZoomControls } from '../components/ZoomControls';
import { Canvas } from '../components/Canvas';
import { Navbar } from '../components/Navbar';
import { useZoom } from '../hooks/useZoom';
import { useDrag } from '../hooks/useDrag';
import { projectsTable } from '../lib/airtable';
import toast from 'react-hot-toast';

export function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scale, zoomIn, zoomOut, handleWheel } = useZoom(0.5);
  const { position, isDragging, handlers } = useDrag();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      try {
        // Check if we can connect to Airtable
        await projectsTable.select().firstPage();
        setIsLoading(false);
      } catch (err) {
        console.error('Database connection error:', err);
        toast.error('Failed to connect to the database');
        setIsLoading(false);
      }
    }

    initialize();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        handleWheel(e, container);
      }
    };

    container.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      container.removeEventListener('wheel', wheelHandler);
    };
  }, [handleWheel]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden text-white">
      <Navbar />
      <ZoomControls onZoomIn={zoomIn} onZoomOut={zoomOut} />
      
      <div
        ref={containerRef}
        className="w-full h-full cursor-move pt-16 bg-grid"
        {...handlers}
      >
        <Canvas
          scale={scale}
          position={position}
          isDragging={isDragging}
        />
      </div>
    </div>
  );
}