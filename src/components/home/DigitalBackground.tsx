import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { Point, ClickRipple } from './types/digital-background';
import { initializeThreeJS, createPoints } from './utils/three-utils';
import { updatePoints } from './utils/animation-handler';
import { measurePerformance, trackFPS } from '@/utils/performance';

const DigitalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const clickRipple = useRef<ClickRipple | null>(null);
  const animationFrameRef = useRef<number>();
  const trackFPSRef = useRef(trackFPS());

  const animate = useCallback(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

    updatePoints(
      pointsRef.current,
      sceneRef.current,
      mousePosition.current,
      clickRipple.current
    );

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    trackFPSRef.current();
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  const handleClick = useCallback((event: MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 10 - 5;
    const y = -((event.clientY - rect.top) / rect.height) * 10 + 5;
    
    clickRipple.current = {
      x,
      y,
      radius: 0,
      strength: 1,
    };
  }, []);

  useEffect(() => {
    const endMeasure = measurePerformance('DigitalBackground');
    const container = containerRef.current;
    if (!container) return;

    const { scene, camera, renderer } = initializeThreeJS(container);
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    pointsRef.current = createPoints(scene);

    const handleResize = () => {
      if (!camera || !renderer || !container) return;
      
      const { width, height } = container.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    
    animate();
    endMeasure();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (renderer) {
        renderer.dispose();
        container.removeChild(renderer.domElement);
      }
    };
  }, [animate, handleMouseMove, handleClick]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default DigitalBackground;