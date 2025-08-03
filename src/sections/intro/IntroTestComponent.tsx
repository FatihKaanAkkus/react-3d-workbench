import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export default function IntroTestComponent() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Box ref={boxRef}>
      <meshNormalMaterial />
    </Box>
  );
}
