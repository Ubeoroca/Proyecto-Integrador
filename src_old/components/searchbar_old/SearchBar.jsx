import styled from "../searchbar/Searchbar.module.css";

export default function SearchBar(props) {
   return (
      <div className={styled.Searchbar}>
      <input className={styled.Searchbar} type='search' />
      <button className={styled.SearchButton} onClick={props.onSearch}>AGREGAR</button>
      </div>
   );
}
