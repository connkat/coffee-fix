import { TipObj } from "../../lib/types";

type Props = {
	solutions: TipObj[];
	handleExplanation: (e: React.MouseEvent<HTMLElement>) => void;
};

export default function Solution({ solutions, handleExplanation }: Props) {
	return (
		<div className="Solution">
			<div className="solutions">
				<ol>
					{solutions.map((solution, index) => (
						<button
							onClick={handleExplanation}
							key={index}
							className="solution"
							value={solution.id}
						>
							{solution.tip}
						</button>
					))}
				</ol>
			</div>
		</div>
	);
}
