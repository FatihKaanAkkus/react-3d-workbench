import { View } from "@react-three/drei";
import { Canvas as ThreeCanvas } from "@react-three/fiber";

export default function Canvas() {
  return (
    <ThreeCanvas
      id="canvas"
      eventSource={document.getElementById("main")!}
      eventPrefix="client"
      style={{ position: "fixed", inset: 0 }}
    >
      <View.Port />
    </ThreeCanvas>
  );
}
