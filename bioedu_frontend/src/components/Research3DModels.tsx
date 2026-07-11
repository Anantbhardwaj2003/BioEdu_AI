import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Sphere, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

export function CancerModel() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron args={[1, 4]} scale={1.2}>
        <MeshDistortMaterial
          color="#0d9488"
          emissive="#0f766e"
          emissiveIntensity={0.5}
          distort={0.6}
          speed={3}
          roughness={0.2}
          metalness={0.8}
        />
      </Icosahedron>
    </Float>
  );
}

export function GeneticsModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <TorusKnot ref={meshRef} args={[0.8, 0.25, 100, 16]} scale={1}>
        <meshPhysicalMaterial
          color="#10b981"
          emissive="#047857"
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
        />
      </TorusKnot>
    </Float>
  );
}

export function NervousSystemModel() {
  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <group scale={0.8}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Sphere key={i} args={[0.3, 16, 16]} position={[
            Math.sin((i / 8) * Math.PI * 2) * 1.2,
            Math.cos((i / 8) * Math.PI * 2) * 1.2,
            (Math.random() - 0.5) * 1
          ]}>
            <meshStandardMaterial color="#34d399" emissive="#059669" emissiveIntensity={0.8} />
          </Sphere>
        ))}
        <Sphere args={[0.6, 32, 32]}>
          <MeshDistortMaterial color="#059669" distort={0.3} speed={2} />
        </Sphere>
      </group>
    </Float>
  );
}

export function ImmunologyModel() {
  return (
    <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5}>
      <Icosahedron args={[1, 1]} scale={1.2}>
        <meshPhysicalMaterial
          color="#2dd4bf"
          roughness={0.3}
          metalness={0.7}
          wireframe={true}
          emissive="#0d9488"
          emissiveIntensity={0.5}
        />
      </Icosahedron>
      <Icosahedron args={[0.8, 2]} scale={1.2}>
        <meshStandardMaterial color="#0f766e" />
      </Icosahedron>
    </Float>
  );
}

export function MicrobiologyModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <group ref={groupRef} scale={0.9}>
        <Cylinder args={[0.3, 0.3, 2, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshPhysicalMaterial color="#14b8a6" emissive="#0f766e" emissiveIntensity={0.4} clearcoat={0.8} roughness={0.3} />
        </Cylinder>
        <Sphere args={[0.3, 32, 32]} position={[0, 0, 1]}>
          <meshPhysicalMaterial color="#14b8a6" emissive="#0f766e" emissiveIntensity={0.4} clearcoat={0.8} roughness={0.3} />
        </Sphere>
        <Sphere args={[0.3, 32, 32]} position={[0, 0, -1]}>
          <meshPhysicalMaterial color="#14b8a6" emissive="#0f766e" emissiveIntensity={0.4} clearcoat={0.8} roughness={0.3} />
        </Sphere>
        {Array.from({ length: 6 }).map((_, i) => (
          <Cylinder key={i} args={[0.02, 0.02, 0.5]} position={[
            Math.cos((i / 6) * Math.PI * 2) * 0.4,
            Math.sin((i / 6) * Math.PI * 2) * 0.4,
            0
          ]} rotation={[0, 0, (i / 6) * Math.PI * 2 + Math.PI / 2]}>
            <meshStandardMaterial color="#2dd4bf" />
          </Cylinder>
        ))}
      </group>
    </Float>
  );
}

export function DrugDevelopmentModel() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <group ref={groupRef} scale={1.2}>
        <Cylinder args={[0.4, 0.4, 1.5, 32]} rotation={[0, 0, Math.PI / 2]}>
          <meshPhysicalMaterial color="#34d399" clearcoat={1} metalness={0.5} roughness={0.2} />
        </Cylinder>
        <Sphere args={[0.4, 32, 32]} position={[-0.75, 0, 0]}>
          <meshPhysicalMaterial color="#059669" clearcoat={1} metalness={0.5} roughness={0.2} />
        </Sphere>
        <Sphere args={[0.4, 32, 32]} position={[0.75, 0, 0]}>
          <meshPhysicalMaterial color="#10b981" clearcoat={1} metalness={0.5} roughness={0.2} />
        </Sphere>
      </group>
    </Float>
  );
}
