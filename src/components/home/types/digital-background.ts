import * as THREE from 'three';

export interface Point {
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

export interface ClickRipple {
  x: number;
  y: number;
  radius: number;
  strength: number;
}