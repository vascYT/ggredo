import "@google/model-viewer";

export default function Model() {
	return (
		<>
			{/* @ts-ignore */}
			<model-viewer
				alt="Goethe Gymnasium Gebäude"
				src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
				ar
				ar-modes="webxr scene-viewer quick-look"
				auto-rotate
				camera-controls
				disable-zoom
				class="w-full h-[20vh] md:w-[40vw] md:h-[30vw]"
				poster=""
			/>
		</>
	);
}