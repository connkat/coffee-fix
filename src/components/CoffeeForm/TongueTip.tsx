import { useState } from "react";

import tongueChart from "../../images/tongue.jpeg";

import "./tongueTip.css";

export default function Tip() {
	const [tongue, setTongue] = useState(false);

	const onTongueClick = () => {
		setTongue(!tongue);
	};

	return (
		<div className="TongueTip">
			<div className="tongue-tip" style={{ top: "75%" }}>
				Not sure how to tell the difference between bitter and sour taste? Check
				out <button onClick={onTongueClick}>this chart</button>!
			</div>
			<div className={tongue ? "tongue-chart" : "hidden"}>
				<button className="tongue-btn" onClick={onTongueClick}>
					X
				</button>
				<img src={tongueChart} alt="tongue chart" className="tongue-img" />
			</div>
		</div>
	);
}
