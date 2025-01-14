import * as THREE from 'three';
import { Point } from '../types/digital-background';

export const initializeThreeJS = (container: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  const { width, height } = container.getBoundingClientRect();
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);
  
  camera.position.z = 5;
  
  return { scene, camera, renderer };
};

export const createPoints = (scene: THREE.Scene, numPoints: number = 50): Point[] => {
  const points: Point[] = [];
  const pointGeometry = new THREE.SphereGeometry(0.05, 12, 12);
  const pointMaterial = new THREE.MeshBasicMaterial({
    color: 0x00BFA6,
    transparent: true,
    opacity: 0.8,
  });

  for (let i = 0; i < numPoints; i++) {
    const baseScale = 0.8 + Math.random() * 0.4;
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
    points.push(point);

    const mesh = new THREE.Mesh(pointGeometry, pointMaterial.clone());
    mesh.scale.setScalar(point.baseScale);
    mesh.position.set(point.x, point.y, point.z);
    scene.add(mesh);
  }

  return points;
};