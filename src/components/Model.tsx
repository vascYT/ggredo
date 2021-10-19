import "@google/model-viewer";

export default function Model() {
	return (
		<>
			{/* @ts-ignore */}
			<model-viewer
				alt="Goethe Gymnasium Gebäude"
				src="https://modelviewer.dev/shared-assets/models/NeilArmstrong.glb"
				auto-rotate
				camera-controls
				disable-zoom
				class="w-full h-[50vh] md:w-[40vw] md:h-[30vw]"
				poster=""
			>
				<button
					className="bg-red-400 bg-opacity-60 border-2 border-[#00000026] w-3 h-3 rounded-full"
					slot="hotspot-1"
					data-position="0.23319249208430226m 1.1494397114179677m 0.1246517033426009m"
					data-normal="0.9014587584383115m 0.18298956882618506m 0.3922842394688641m"
					data-visibility-attribute="visible"
				>
					<div className="inline-flex justify-center items-center ml-4 mt-4 backdrop-blur border-2 border-[#00000026] bg-opacity-75 rounded p-2">
						<span className="text-sm">Hotspot1</span>
					</div>
				</button>
				{/* @ts-ignore */}
			</model-viewer>
		</>
	);
}
