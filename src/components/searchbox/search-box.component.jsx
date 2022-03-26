import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
	render() {
		const { onSearchChangeHandler, placeholder, className } = this.props;

		return (
			<div>
				<input
					className={className}
					type="search"
					placeholder={placeholder}
					onChange={onSearchChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
