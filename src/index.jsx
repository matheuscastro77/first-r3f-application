import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import Experiente from "./Components/Experiense";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    //flat
    // dpr={ [ 1, 2 ] }
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputEncoding: THREE.sRGBEncoding
    }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [3, 2, 6],
    }}
  >
    <Experiente />
  </Canvas>
);
