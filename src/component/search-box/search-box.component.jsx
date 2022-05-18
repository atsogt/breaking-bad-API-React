import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, className, placeholder }) => (
  <input
    onChange={onChangeHandler}
    className={className}
    type="search"
    placeholder={placeholder}
  ></input>
);

export default SearchBox;
