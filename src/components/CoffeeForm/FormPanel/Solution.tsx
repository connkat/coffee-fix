import { TipObj } from "../../../lib/types";
// import rightArrow from "../../images/right-arrow.svg";

import "./formPanel.css";

type SolutionProps = {
	solutions: TipObj[];
	handleExplanation: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Solution({
	solutions,
	handleExplanation,
}: SolutionProps) {
	return (
		<div className="Solution">
			<div className="Solution__container">
				<ol>
					{solutions.map((solution, index) => (
						<div key={index} className="Solution__buttons">
							<li key={index}>
								<button
									onClick={handleExplanation}
									key={index}
									className="solution"
									value={solution.id}
								>
									{solution.tip}
								</button>
							</li>
							{/* <img src={rightArrow} alt="right-arrow" className="right-arrow" /> */}
						</div>
					))}
				</ol>
				<p>(click suggestion for more info)</p>
			</div>
		</div>
	);
}
