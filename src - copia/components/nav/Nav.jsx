import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "../nav/Nav.module.css";

export default function Nav (props) {
    console.log(props)
    return (
        <div className={styles.container}>
        <SearchBar
          onSearch={(characterID) => props.onSearch(characterID)}
        />
      </div>
    )
}