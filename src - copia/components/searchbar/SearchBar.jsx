import { useState } from "react";
import styled from "../searchbar/Searchbar.module.css";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("")
   const handleInputChange = (event) => {
      const {value} = event.target
      setCharacter(value)
   }
   return (
      <div className={styled.Searchbar}>
      <input 
      className={styled.Searchbar}
      type='search'
      onChange={handleInputChange}
      />
      <button
      className={styled.SearchButton}
      onClick={()=>props.onSearch(character)}>AGREGAR</button>
      </div>
   );
}
