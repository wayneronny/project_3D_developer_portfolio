import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html center style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '100px', height: '10px', backgroundColor: '#111', borderRadius: '5px' }}> 
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: '#fff', borderRadius: '5px' }} /> 
      </div>
      <p style={{ fontSize: 14, color: '#fff', marginTop: '10px' }}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default CanvasLoader;
