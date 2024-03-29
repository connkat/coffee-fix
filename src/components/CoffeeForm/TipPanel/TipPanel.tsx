import Infotip from "./Infotip";

type Props = {
	explanation: string;
};

export default function TipPanel({ explanation }: Props) {
	return (
		<div className="TipPanel">
			<h1>Tips</h1>
			<Infotip explanation={explanation} />
		</div>
	);
}
