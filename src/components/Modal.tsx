import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "../App.css";

import { TipObj } from "../lib/types";

type Props = {
	tips: TipObj[];
};

export default function Infotip({ tips }: Props) {
	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="Infotip" style={{ backgroundColor: "grey" }}>
			{tips.map((tip, index) => (
				<div key={index} className="tip">
					<button onClick={handleModal}>{tip.tip}</button>
					{modal ? (
						<a href={tip.link}>
							<p>{tip.additionalInfo}</p>
						</a>
					) : null}
				</div>
			))}
		</div>
	);
}
