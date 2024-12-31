import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Point {
  x: number;
  y: number;
  z: number;
  connections: Point[];
  velocity: THREE.Vector3;
}

const DigitalBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const points = useRef<Point[]>([]);
  const scene = useRef<THREE.Scene>();
  const camera = useRef<THREE.PerspectiveCamera>();
  const renderer = useRef<THREE.WebGLRenderer>();

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

    // Create points
    const numPoints = 50;
    const pointGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const pointMaterial = new THREE.MeshBasicMaterial({
      color: 0x00BFA6,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < numPoints; i++) {
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
      };
      points.current.push(point);

      const mesh = new THREE.Mesh(pointGeometry, pointMaterial);
      mesh.position.set(point.x, point.y, point.z);
      scene.current.add(mesh);
    }

    // Create connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00BFA6,
      transparent: true,
      opacity: 0.3,
    });

    // Position camera
    camera.current.position.z = 5;

    // Animation loop
    const animate = () => {
      if (!scene.current || !camera.current || !renderer.current) return;

      // Update points
      points.current.forEach((point, index) => {
        point.x += point.velocity.x;
        point.y += point.velocity.y;
        point.z += point.velocity.z;

        // Boundary check and bounce
        if (Math.abs(point.x) > 5) point.velocity.x *= -1;
        if (Math.abs(point.y) > 5) point.velocity.y *= -1;
        if (Math.abs(point.z) > 2.5) point.velocity.z *= -1;

        // Update mesh position
        const mesh = scene.current!.children[index];
        mesh.position.set(point.x, point.y, point.z);
      });

      // Update connections
      while (scene.current.children.length > numPoints) {
        scene.current.remove(scene.current.children[scene.current.children.length - 1]);
      }

      // Create new connections
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
            const line = new THREE.Line(geometry, lineMaterial);
            scene.current.add(line);
          }
        });
      });

      // Mouse interaction
      const mouseX = (mousePosition.current.x / window.innerWidth) * 2 - 1;
      const mouseY = -(mousePosition.current.y / window.innerHeight) * 2 + 1;
      
      points.current.forEach((point, index) => {
        const mesh = scene.current!.children[index];
        const distance = Math.sqrt(
          Math.pow(mouseX * 5 - point.x, 2) +
          Math.pow(mouseY * 5 - point.y, 2)
        );
        
        if (distance < 2) {
          const scale = 1 + (2 - distance) * 0.5;
          mesh.scale.set(scale, scale, scale);
          (mesh.material as THREE.MeshBasicMaterial).opacity = Math.min(1, 0.8 + (2 - distance) * 0.2);
        } else {
          mesh.scale.set(1, 1, 1);
          (mesh.material as THREE.MeshBasicMaterial).opacity = 0.8;
        }
      });

      renderer.current.render(scene.current, camera.current);
      requestAnimationFrame(animate);
    };

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
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
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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