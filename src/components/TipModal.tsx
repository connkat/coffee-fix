import { useState } from "react";
// import { Tooltip } from "react-tooltip";
import "../App.css";

import { TipObj } from "../lib/types";

type Props = {
	tips: TipObj[];
};

export default function TipModal({ tips }: Props) {
	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="TipModal">
			<div className="tips">
				{tips.map((tip, index) => (
					<div key={index} className="tip">
						<p onClick={handleModal}>{tip.tip}</p>
						{/* {modal ? (
						<a href={tip.link}>
							<p>{tip.additionalInfo}</p>
						</a>
					) : null} */}
					</div>
				))}
			</div>
		</div>
	);
}
