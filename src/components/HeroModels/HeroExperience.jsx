import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HeroLights from './HeroLights';
import { Room } from './Room';
import { useThree } from '@react-three/fiber';


const HeroExperience = () => {
    const isTablet = false;
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <HeroLights/>
        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2} 
        />
        <group
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI /4, 0]}
        > 
        
            <Room />
        </group>
    </Canvas>
  )
}

export default HeroExperience