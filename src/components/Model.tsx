import { useGLTF } from '@react-three/drei'

type Props = {
  url: string
}

function Model({ url }: Props) {
  // Load the 3D model using useGLTF hook
  const { scene } = useGLTF(url)

  // Render the 3D model scene as a primitive
  return <primitive object={scene} scale={1.5} />
}

export default Model
