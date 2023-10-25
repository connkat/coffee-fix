import { Tooltip } from "react-tooltip";
import "../App.css";

type Props = {
	tip: string;
	additionalInfo: string;
};

export default function Infotip({ tip, additionalInfo }: Props) {
	return (
		<div className="Infotip">
			<p data-tooltip-id="coffee-fact">{tip}</p>
			<Tooltip id="coffee-fact" place="bottom" content={additionalInfo} />
		</div>
	);
}
