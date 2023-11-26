import { useState } from "react";

import { TipObj } from "../../lib/types";

type Props = {
	solutions: TipObj[];
};

export default function Solution({ solutions }: Props) {
	const [modal, setModal] = useState(false);

	const handleModal = () => {
		setModal(!modal);
	};

	return (
		<div className="Solution">
			<div className="solutions">
				{solutions.map((solution, index) => (
					<div key={index} className="solution">
						<p onClick={handleModal}>{solution.tip}</p>
					</div>
				))}
			</div>
		</div>
	);
}
