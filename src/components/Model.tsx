import { useGLTF } from '@react-three/drei'

type Props = {
  url: string
}

function Model({ url }: Props) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={1.5} />
}

export default Model
