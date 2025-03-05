import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p
        style={{
          color: "#f1f1f1",
          fontSize: 30,
          fontWeight: 800,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
