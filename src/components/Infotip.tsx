import { Tooltip } from "react-tooltip";
import "../App.css";

import { TipObj } from "../lib/types";

type Props = {
	tips: TipObj[];
};

export default function Infotip({ tips }: Props) {
	return (
		<div className="Infotip" style={{ backgroundColor: "grey" }}>
			{tips.map((tip, index) => (
				<div key={index} className="tip">
					<p data-tooltip-id="coffee-fact">{tip.tip}</p>
					<a href={tip.link}>
						<Tooltip
							id="coffee-fact"
							place="bottom"
							content={tip.additionalInfo}
						/>
					</a>
				</div>
			))}
		</div>
	);
}