import { Canvas } from "@react-three/fiber"
import { Mesh } from "three"

function App() {


  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Mesh />
      </Canvas>
    </>
  )
}

export default App
