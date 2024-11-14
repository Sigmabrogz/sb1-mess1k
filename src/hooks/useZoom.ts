import { useState, useCallback } from 'react';

const MIN_SCALE = 0.2;
const MAX_SCALE = 2;
const ZOOM_SPEED = 0.001;

export function useZoom(initialScale = 0.5) {
  const [scale, setScale] = useState(initialScale);

  const zoomIn = useCallback(() => {
    setScale(prev => Math.min(prev + 0.1, MAX_SCALE));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(prev => Math.max(prev - 0.1, MIN_SCALE));
  }, []);

  const handleWheel = useCallback((e: WheelEvent, containerRef: HTMLDivElement) => {
    e.preventDefault();

    const delta = -e.deltaY;
    const rect = containerRef.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setScale(prevScale => {
      const newScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, prevScale * (1 - delta * ZOOM_SPEED))
      );

      // Adjust container position to zoom towards mouse position
      const scaleChange = newScale - prevScale;
      const containerX = mouseX - (mouseX * newScale) / prevScale;
      const containerY = mouseY - (mouseY * newScale) / prevScale;

      if (containerRef.style) {
        containerRef.style.transformOrigin = `${mouseX}px ${mouseY}px`;
      }

      return newScale;
    });
  }, []);

  return { scale, zoomIn, zoomOut, handleWheel };
}