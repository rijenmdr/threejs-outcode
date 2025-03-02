import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import Model from './components/Model'

import './App.css'

function App() {
  const controlsRef = useRef<OrbitControlsImpl>(null)

  const resetView = () => {
    if (controlsRef.current) {
      controlsRef.current.reset()
    }
  }

  return (
    <div className="container">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ touchAction: 'none' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Model url={'src/assets/cube.glb'} />
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
      <button onClick={resetView} className="btn">
        Reset View
      </button>
    </div>
  )
}

export default App
