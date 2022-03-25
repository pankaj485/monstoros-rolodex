import { Component } from "react";

import "./App.css";

// function App() {
class App extends Component {
	// constructor, super method is must while creating states with class componenets
	constructor() {
		super();
		this.state = {
			monsters: [
				{
					name: "Linda",
					id: 1,
				},
				{
					name: "Frank",
					id: 2,
				},
				{
					name: "jacky",
					id: 3,
				},
			],
		};
	}

	render() {
		// destructing
		const { monsters } = this.state;
		return (
			<div className="App">
				{monsters.map((monster) => {
					return <h1 key={monster.id}> {monster.name} </h1>;
				})}
			</div>
		);
	}
}

export default App;
