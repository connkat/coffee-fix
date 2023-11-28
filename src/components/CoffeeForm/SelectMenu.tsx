type SelectProps = {
	options: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectMenu({ options, onChange }: SelectProps) {
	return (
		<div className="SelectMenu">
			<select onChange={onChange}>
				{options.map((option, index) => (
					<>
						<option hidden key="default" selected={true} value="select">
							Select
						</option>
						<option key={index} value={option}>
							{option}
						</option>
					</>
				))}
			</select>
		</div>
	);
}
