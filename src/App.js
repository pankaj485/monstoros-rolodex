import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/searchbox/search-box.component.jsx";
// function App() {
class App extends Component {
	// constructor, super method is must while creating states with class componenets
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchValue: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				// console.log(response);
				return response.json();
			})
			.then((body) => {
				this.setState(
					() => {
						return { monsters: body, fetchedMonsters: body };
					},
					() => {
						// console.log(this.state);
					}
				);
			});
	}

	onSearchChange = (e) => {
		let inputValue = e.target.value.toLocaleLowerCase();
		this.setState({ searchValue: inputValue });
	};

	render() {
		// destructing

		const { searchValue, monsters } = this.state;
		const { onSearchChange } = this;

		const filterMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchValue);
		});

		return (
			<div className="App">
				<h1 className="app-title"> Monsters Rolodex </h1>

				<SearchBox
					onSearchChangeHandler={onSearchChange}
					placeholder="Search Monsters"
					className="search-box"
				/>
				<CardList monsters={filterMonsters} />
			</div>
		);
	}
}

export default App;
