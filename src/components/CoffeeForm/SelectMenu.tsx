type SelectProps = {
	options: string[];
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function SelectMenu(props: SelectProps) {
	return (
		<div className="SelectMenu">
			<select onChange={props.onChange}>
				<option hidden key="default" value="select">
					Select
				</option>
				{props.options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
}
