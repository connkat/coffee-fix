import { TipObj } from "../../lib/types";

type Props = {
	explanations: TipObj[];
};

export default function Infotip({ explanations }: Props) {
	return (
		<div className="Infotip">
			{explanations.map((explanation, index) => (
				<div key={index} className="tip">
					<p data-tooltip-id="coffee-fact">{explanation.additionalInfo}</p>
					<a href={explanation.link}></a>
				</div>
			))}
		</div>
	);
}
