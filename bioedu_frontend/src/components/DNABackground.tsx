import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const count = 50;
const radius = 2.5;
const height = 20;

function DNA() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  const basePairs = [];
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 6; // 3 full turns
    const y = (i / count) * height - height / 2;
    
    // Strand 1
    const x1 = Math.cos(t) * radius;
    const z1 = Math.sin(t) * radius;
    
    // Strand 2
    const x2 = Math.cos(t + Math.PI) * radius;
    const z2 = Math.sin(t + Math.PI) * radius;

    // Glowing colors matching the theme
    const color1 = "#10b981"; // Emerald
    const color2 = "#06b6d4"; // Cyan
    const mixedColor = new THREE.Color(color1).lerp(new THREE.Color(color2), i / count);

    basePairs.push(
      <group key={i}>
        {/* Backbone 1 */}
        <mesh position={[x1, y, z1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial 
            color={color1} 
            emissive={color1} 
            emissiveIntensity={1.5} 
            toneMapped={false} 
          />
        </mesh>
        
        {/* Backbone 2 */}
        <mesh position={[x2, y, z2]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial 
            color={color2} 
            emissive={color2} 
            emissiveIntensity={1.5} 
            toneMapped={false} 
          />
        </mesh>

        {/* Connecting Bond */}
        <mesh position={[0, y, 0]} rotation={[0, -t, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, radius * 2, 8]} />
          <meshStandardMaterial 
            color={mixedColor} 
            transparent 
            opacity={0.3} 
            emissive={mixedColor}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={groupRef} rotation={[0.4, 0, 0.5]}>
      {basePairs}
    </group>
  );
}

export function DNABackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <fog attach="fog" args={['#050505', 10, 30]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
          <DNA />
        </Float>
        <Sparkles 
          count={300} 
          scale={20} 
          size={1.5} 
          speed={0.4} 
          opacity={0.2} 
          color="#10b981" 
        />
        <Sparkles 
          count={200} 
          scale={20} 
          size={2} 
          speed={0.2} 
          opacity={0.15} 
          color="#06b6d4" 
        />
      </Canvas>
    </div>
  );
}
