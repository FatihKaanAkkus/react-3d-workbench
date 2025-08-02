import { Box, CameraControls, OrbitControls, View } from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

function App() {
  const container = useRef<HTMLElement>(null!);

  return (
    <main ref={container}>
      <View style={{ width: "50%" }}>
        <Box>
          <meshNormalMaterial />
        </Box>
        <OrbitControls />
      </View>
      <View style={{ width: "50%" }}>
        <Box>
          <meshNormalMaterial />
        </Box>
        <CameraControls />
      </View>
      <Canvas
        eventSource={container}
        eventPrefix="client"
        id="canvas"
        style={{ position: "fixed", inset: 0 }}
      >
        <View.Port />
      </Canvas>
    </main>
  );
}

export default App;
