import "./search-box.styles.css";

const SearchBox = (props) => {
	const { onSearchChangeHandler, placeholder, className } = props;

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
};

export default SearchBox;
