import "./card-list.styles.css";
import Card from "./card/card.comonent.jsx";
const CardList = (props) => {
	const { monsters } = props;

	return (
		<div className="card-list">
			{monsters.map((monster) => {
				const { name, email, id } = monster;
				return <Card key={id} name={name} email={email} id={id} />;
			})}
		</div>
	);
};

export default CardList;
