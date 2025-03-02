import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import Model from './components/Model'

import './App.css'

function App() {
  // Create a reference to access OrbitControls instance
  const controlsRef = useRef<OrbitControlsImpl>(null)

  // Function to reset camera view to initial position
  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="container">
      {/* Canvas component to render 3D scene */}
      <Canvas camera={{ position: [0, 2, 5], fov: 100 }} style={{ touchAction: 'none' }}>
        {/* Scene lighting setup */}
        <ambientLight intensity={0.5} /> {/* Soft overall lighting */}
        <directionalLight position={[2, 2, 2]} intensity={1} />{' '}
        {/* Directional light for shadows */}
        {/* 3D Model component with path to GLB file */}
        <Model url={'src/assets/cube.glb'} />
        {/* Camera controls configuration */}
        <OrbitControls
          ref={controlsRef}
          enableZoom={true}
          enablePan={false}
          minDistance={1.5}
          maxDistance={8}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Reset button to return camera to initial position */}
      <button onClick={resetView} className="btn">
        Reset View
      </button>
    </div>
  )
}

export default App
