import { useRef } from "react";
import Canvas from "./Canvas";
import styles from "./App.module.css";
import IntroView from "./sections/intro/IntroView";

export default function App() {
  const container = useRef<HTMLElement>(null!);

  return (
    <main className={styles.main} ref={container}>
      <div className={styles.introContainer}>
        <IntroView />
      </div>
      <Canvas />
    </main>
  );
}
