type Props = {
	explanation: string;
};

export default function Infotip({ explanation }: Props) {
	return (
		<div className="Infotip">
			<p>{explanation}</p>
		</div>
	);
}
