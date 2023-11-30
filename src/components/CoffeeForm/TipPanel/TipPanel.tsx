import Infotip from "./Infotip";

import "../coffeeForm.css";

type Props = {
	explanation: string;
};

export default function TipPanel({ explanation }: Props) {
	return (
		<div className="TipPanel">
			<h2>Tips</h2>
			<Infotip explanation={explanation} />
		</div>
	);
}
