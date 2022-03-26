import { Component } from "react";
import "../card/card.styles.css";

class Card extends Component {
	render() {
		const { name, email, id } = this.props;

		return (
			<div className="card-container" key={id}>
				<img
					src={`https://robohash.org/${id}/set=set2&size=120*120`}
					alt={`monster ${name}`}
				/>
				<h2>{`${name}`}</h2>
				<p>{`${email}`}</p>
			</div>
		);
	}
}

export default Card;
