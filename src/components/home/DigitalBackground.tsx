import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Point {
  x: number;
  y: number;
  z: number;
  connections: Point[];
  velocity: THREE.Vector3;
  baseScale: number;
  targetScale: number;
  currentScale: number;
  baseOpacity: number;
  targetOpacity: number;
  currentOpacity: number;
}

const DigitalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const points = useRef<Point[]>([]);
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();
  const clickRipple = useRef<{ x: number, y: number, radius: number, strength: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    renderer.current.setSize(width, height);
    container.appendChild(renderer.current.domElement);

    // Create points with enhanced properties
    const numPoints = 50;
    const pointGeometry = new THREE.SphereGeometry(0.05, 12, 12);
    const pointMaterial = new THREE.MeshBasicMaterial({
      color: 0x00BFA6,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < numPoints; i++) {
      const baseScale = 0.8 + Math.random() * 0.4; // Random base size variation
      const point: Point = {
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 5,
        connections: [],
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        baseScale,
        targetScale: baseScale,
        currentScale: baseScale,
        baseOpacity: 0.6 + Math.random() * 0.2,
        targetOpacity: 0.6 + Math.random() * 0.2,
        currentOpacity: 0.6 + Math.random() * 0.2,
      };
      points.current.push(point);

      const mesh = new THREE.Mesh(pointGeometry, pointMaterial.clone());
      mesh.scale.setScalar(point.baseScale);
      mesh.position.set(point.x, point.y, point.z);
      scene.current.add(mesh);
    }

    // Enhanced line material with glow effect
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00BFA6,
      transparent: true,
      opacity: 0.3,
    });

    // Position camera
    camera.current.position.z = 5;

    // Animation loop with enhanced interactivity
    const animate = () => {
      if (!scene.current || !camera.current || !renderer.current) return;

      // Update points with smooth transitions
      points.current.forEach((point, index) => {
        // Update position
        point.x += point.velocity.x;
        point.y += point.velocity.y;
        point.z += point.velocity.z;

        // Boundary check and bounce
        if (Math.abs(point.x) > 5) point.velocity.x *= -1;
        if (Math.abs(point.y) > 5) point.velocity.y *= -1;
        if (Math.abs(point.z) > 2.5) point.velocity.z *= -1;

        // Smooth scale and opacity transitions
        point.currentScale += (point.targetScale - point.currentScale) * 0.1;
        point.currentOpacity += (point.targetOpacity - point.currentOpacity) * 0.1;

        // Update mesh
        const mesh = scene.current!.children[index] as THREE.Mesh;
        mesh.position.set(point.x, point.y, point.z);
        mesh.scale.setScalar(point.currentScale);
        (mesh.material as THREE.MeshBasicMaterial).opacity = point.currentOpacity;
      });

      // Update connections
      while (scene.current.children.length > points.current.length) {
        scene.current.remove(scene.current.children[scene.current.children.length - 1]);
      }

      // Create dynamic connections
      points.current.forEach((point, i) => {
        points.current.slice(i + 1).forEach(otherPoint => {
          const distance = Math.sqrt(
            Math.pow(point.x - otherPoint.x, 2) +
            Math.pow(point.y - otherPoint.y, 2) +
            Math.pow(point.z - otherPoint.z, 2)
          );

          if (distance < 2) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(point.x, point.y, point.z),
              new THREE.Vector3(otherPoint.x, otherPoint.y, otherPoint.z),
            ]);
            const line = new THREE.Line(geometry, lineMaterial.clone());
            const opacity = Math.max(0.1, 1 - distance / 2);
            (line.material as THREE.LineBasicMaterial).opacity = opacity * 0.3;
            scene.current.add(line);
          }
        });
      });

      // Enhanced mouse interaction
      const mouseX = (mousePosition.current.x / window.innerWidth) * 2 - 1;
      const mouseY = -(mousePosition.current.y / window.innerHeight) * 2 + 1;
      
      points.current.forEach((point, index) => {
        const mesh = scene.current!.children[index] as THREE.Mesh;
        const distance = Math.sqrt(
          Math.pow(mouseX * 5 - point.x, 2) +
          Math.pow(mouseY * 5 - point.y, 2)
        );
        
        // Dynamic hover effect
        if (distance < 2) {
          point.targetScale = point.baseScale * (1.5 - distance * 0.25);
          point.targetOpacity = Math.min(1, point.baseOpacity + (2 - distance) * 0.3);
          
          // Add subtle movement away from cursor
          const angle = Math.atan2(point.y - mouseY * 5, point.x - mouseX * 5);
          point.velocity.x += Math.cos(angle) * 0.0001;
          point.velocity.y += Math.sin(angle) * 0.0001;
        } else {
          point.targetScale = point.baseScale;
          point.targetOpacity = point.baseOpacity;
        }
      });

      // Update click ripple effect
      if (clickRipple.current) {
        clickRipple.current.radius += 0.2;
        clickRipple.current.strength *= 0.95;

        if (clickRipple.current.strength < 0.01) {
          clickRipple.current = null;
        } else {
          points.current.forEach((point, index) => {
            const dx = point.x - clickRipple.current!.x;
            const dy = point.y - clickRipple.current!.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (Math.abs(distance - clickRipple.current!.radius) < 0.5) {
              point.targetScale = point.baseScale * (1 + clickRipple.current!.strength);
              point.targetOpacity = Math.min(1, point.baseOpacity + clickRipple.current!.strength);
            }
          });
        }
      }

      renderer.current.render(scene.current, camera.current);
      requestAnimationFrame(animate);
    };

    // Enhanced mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    // Click handler for ripple effect
    const handleClick = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 10 - 5;
      const y = -((event.clientY - rect.top) / rect.height) * 10 + 5;
      
      clickRipple.current = {
        x,
        y,
        radius: 0,
        strength: 1,
      };
    };

    // Handle window resize
    const handleResize = () => {
      if (!camera.current || !renderer.current || !container) return;
      
      const { width, height } = container.getBoundingClientRect();
      camera.current.aspect = width / height;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.current.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
    />
  );
};

export default DigitalBackground;