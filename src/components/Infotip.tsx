import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";
import "../App.css";

type Props = {
	tip: string;
};

export default function Infotip({ tip }: Props) {
	return (
		<div className="Infotip">
			<a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
				"this thing"
			</a>
			<Tooltip id="my-tooltip" />
		</div>
	);
}
