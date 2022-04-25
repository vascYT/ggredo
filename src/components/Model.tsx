import {OrbitControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";

function Astgasse() {
	const {scene} = useGLTF("/astgasse_v0.4.glb");
	return <primitive object={scene} />;
}

export default function Model() {
	return (
		<Canvas
			camera={{position: [0, 0, 200], fov: 50}}
			className="cursor-grab active:cursor-grabbing"
		>
			<ambientLight intensity={0.5} />
			<pointLight position={[100, 300, 100]} />
			<Suspense fallback={null}>
				<Astgasse />
			</Suspense>
			<OrbitControls />
		</Canvas>
	);
}
