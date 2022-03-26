import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/searchbox/search-box.component.jsx";
const App = () => {
	const [searchField, setsearchField] = useState("");
	const [monsters, setMonsters] = useState([]);
	const [fileterdMonsters, setFilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (e) => {
		let searchFieldString = e.target.value.toLocaleLowerCase();
		setsearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title"> Monsters Rolodex </h1>

			<SearchBox
				onSearchChangeHandler={onSearchChange}
				placeholder="Search Monsters"
				className="search-box"
			/>
			<CardList monsters={fileterdMonsters} />
		</div>
	);
};

export default App;
// componentDidMount() {
// 	fetch("https://jsonplaceholder.typicode.com/users")
// 		.then((response) => {
// 			// console.log(response);
// 			return response.json();
// 		})
// 		.then((body) => {
// 			this.setState(
// 				() => {
// 					return { monsters: body, fetchedMonsters: body };
// 				},
// 				() => {
// 					// console.log(this.state);
// 				}
// 			);
// 		});
// }
