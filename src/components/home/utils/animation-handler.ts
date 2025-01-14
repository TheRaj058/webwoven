import * as THREE from 'three';
import { Point, ClickRipple } from '../types/digital-background';

export const updatePoints = (
  points: Point[],
  scene: THREE.Scene,
  mousePosition: { x: number; y: number },
  clickRipple: ClickRipple | null
) => {
  points.forEach((point, index) => {
    // Update position
    point.x += point.velocity.x;
    point.y += point.velocity.y;
    point.z += point.velocity.z;

    // Boundary check and bounce
    if (Math.abs(point.x) > 5) point.velocity.x *= -1;
    if (Math.abs(point.y) > 5) point.velocity.y *= -1;
    if (Math.abs(point.z) > 2.5) point.velocity.z *= -1;

    // Smooth transitions
    point.currentScale += (point.targetScale - point.currentScale) * 0.1;
    point.currentOpacity += (point.targetOpacity - point.currentOpacity) * 0.1;

    // Update mesh
    const mesh = scene.children[index] as THREE.Mesh;
    mesh.position.set(point.x, point.y, point.z);
    mesh.scale.setScalar(point.currentScale);
    (mesh.material as THREE.MeshBasicMaterial).opacity = point.currentOpacity;

    // Mouse interaction
    const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
    const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
    const distance = Math.sqrt(
      Math.pow(mouseX * 5 - point.x, 2) +
      Math.pow(mouseY * 5 - point.y, 2)
    );

    if (distance < 2) {
      point.targetScale = point.baseScale * (1.5 - distance * 0.25);
      point.targetOpacity = Math.min(1, point.baseOpacity + (2 - distance) * 0.3);
      
      const angle = Math.atan2(point.y - mouseY * 5, point.x - mouseX * 5);
      point.velocity.x += Math.cos(angle) * 0.0001;
      point.velocity.y += Math.sin(angle) * 0.0001;
    } else {
      point.targetScale = point.baseScale;
      point.targetOpacity = point.baseOpacity;
    }
  });

  // Handle click ripple effect
  if (clickRipple) {
    handleClickRipple(points, clickRipple);
  }
};

const handleClickRipple = (points: Point[], clickRipple: ClickRipple) => {
  clickRipple.radius += 0.2;
  clickRipple.strength *= 0.95;

  if (clickRipple.strength >= 0.01) {
    points.forEach((point) => {
      const dx = point.x - clickRipple.x;
      const dy = point.y - clickRipple.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (Math.abs(distance - clickRipple.radius) < 0.5) {
        point.targetScale = point.baseScale * (1 + clickRipple.strength);
        point.targetOpacity = Math.min(1, point.baseOpacity + clickRipple.strength);
      }
    });
  }
};