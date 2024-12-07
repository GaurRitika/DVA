// // // src/components/HerbModel3D.jsx
// // import React, { Suspense } from 'react';
// // import { Canvas } from '@react-three/fiber';
// // import { OrbitControls, useGLTF } from '@react-three/drei';

// // function Model({ modelPath }) {
// //   const { scene } = useGLTF(modelPath);
// //   return <primitive object={scene} scale={1.5} />;
// // }

// // const HerbModel3D = ({ modelPath }) => {
// //   return (
// //     <div style={{ width: '100%', height: '400px' }}>
// //       <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
// //         <ambientLight intensity={0.5} />
// //         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
// //         <pointLight position={[-10, -10, -10]} />
// //         <Suspense fallback={null}>
// //           <Model modelPath={modelPath} />
// //         </Suspense>
// //         <OrbitControls enableZoom={true} autoRotate={true} />
// //       </Canvas>
// //     </div>
// //   );
// // };

// // export default HerbModel3D;


// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model({ modelPath }) {
//   const { scene } = useGLTF(modelPath);
//   return <primitive object={scene} scale={1.5} />;
// }

// const HerbModel3D = ({ modelPath }) => {
//   return (
//     <div style={{ width: '100%', height: '100vh' }}>
//       <Canvas
//         camera={{ position: [0, 0, 4], fov: 50 }}
//         style={{ background: 'transparent' }}
//       >
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <Suspense fallback={null}>
//           <Model modelPath={modelPath} />
//         </Suspense>
//         <OrbitControls 
//           enableZoom={true} 
//           autoRotate={true}
//           autoRotateSpeed={2}
//         />
//       </Canvas>
//     </div>
//   );
// };

// export default HerbModel3D;

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

const HerbModel3D = ({ modelPath }) => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls 
          enableZoom={true} 
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
};

export default HerbModel3D;
