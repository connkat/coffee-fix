import "./formPanel.css";

type SelectProps = {
	options: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectMenu({ options, onChange }: SelectProps) {
	return (
		<div className="SelectMenu">
			<select onChange={onChange} className="SelectMenu__options">
				<option hidden value="select">
					Select
				</option>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}
