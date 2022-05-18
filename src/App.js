//import { Component } from 'react';
import { useState, useEffect } from "react";
import SearchBox from "./component/search-box/search-box.component";
import "./App.css";
import CardList from "./component/card-list/card-list.component.jsx";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [title, setTitle] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filteredChar, setFilteredChar] = useState(characters);

  console.log("render");

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then((res) => res.json())
      .then((char) => setCharacters(char));
  }, []);

  useEffect(() => {
    const filteredChar = characters.filter((char) => {
      return (
        char.name.toLocaleLowerCase().includes(searchField) ||
        char.nickname.toLocaleLowerCase().includes(searchField)
      );
    });

    setFilteredChar(filteredChar);
  }, [searchField, characters]);

  const onEventChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };
  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onEventChange}
        placeholder="Search Characters"
      />
      <br/>
      <SearchBox
        className="search-box"
        onChangeHandler={onTitleChange}
        placeholder="Title Change"
      />
      <CardList characters={filteredChar} />
    </div>
  );
};
export default App;
