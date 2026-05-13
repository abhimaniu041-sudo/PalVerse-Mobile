import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Sky
} from '@react-three/drei'

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[300, 300]} />
      <meshStandardMaterial color="#2d5a27" />
    </mesh>
  )
}

function Player() {
  return (
    <mesh position={[0, 1, 0]} castShadow>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function Creature({ position, color }) {
  return (
    <mesh position={position} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

function Tree({ position }) {
  return (
    <group position={position}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 4]} />
        <meshStandardMaterial color="#5c3b1e" />
      </mesh>

      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  )
}

export default function App() {
  return (
    <Canvas
      shadows
      camera={{
        position: [10, 10, 10],
        fov: 60
      }}
    >
      <Sky sunPosition={[100, 20, 100]} />

      <ambientLight intensity={0.5} />

      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        castShadow
      />

      <Ground />

      <Player />

      <Creature position={[5, 1, 0]} color="purple" />
      <Creature position={[-5, 1, -5]} color="red" />
      <Creature position={[8, 1, 5]} color="blue" />

      <Tree position={[10, 0, 10]} />
      <Tree position={[-10, 0, -10]} />
      <Tree position={[15, 0, -5]} />
      <Tree position={[-15, 0, 8]} />

      <OrbitControls />
    </Canvas>
  )
}
