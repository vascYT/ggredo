import "@google/model-viewer";
import Popup from "./Popup";

export default function Model() {
	return (
		<>
			{/* @ts-ignore */}
			<model-viewer
				alt="Goethe Gymnasium Gebäude"
				src="/astgasse.glb"
				auto-rotate
				camera-controls
				class="w-full h-[50vh] md:w-[40vw] md:h-[30vw]"
				poster=""
			>
				<Popup
					trigger={
						<button
							className="bg-red-400 border-2 border-[#00000026] w-3 h-3 rounded-full"
							slot="hotspot-1"
							data-position="0.23319249208430226m 1.1494397114179677m 0.1246517033426009m"
							data-normal="0.9014587584383115m 0.18298956882618506m 0.3922842394688641m"
							data-visibility-attribute="visible"
						/>
					}
					title="TEST"
				>
					<img src="https://www.image-engineering.de/content/products/charts/te166/images/TE166.jpg" />
				</Popup>
				{/* @ts-ignore */}
			</model-viewer>
		</>
	);
}
