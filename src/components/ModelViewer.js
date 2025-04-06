'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Stage } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';

function Model({ modelPath, isThumb }) {
  const { scene } = useGLTF(modelPath);
  const ref = useRef();

  useFrame(() => {
    if (isThumb && ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return <primitive object={scene} ref={ref} />;
}

const ModelViewer = ({ modelPath, isThumb = false, onLoad }) => {
  useEffect(() => {
    if (onLoad) {
      // Call onLoad when the model is ready
      onLoad();
    }
  }, []);

  const canvasStyle = isThumb ? {
    width: '100%',
    aspectRatio: '1/1',
    background: 'transparent'
  } : {
    width: '100%',
    height: '100%',
    background: 'transparent'
  };

  return (
    <div style={canvasStyle}>
      <Canvas
        camera={{ position: [3, 3, 3], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={1} adjustCamera={!isThumb}>
            <Model modelPath={modelPath} isThumb={isThumb} />
          </Stage>
          <Environment preset="city" />
          {!isThumb && <OrbitControls />}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;