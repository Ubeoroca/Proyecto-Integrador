import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "../nav/Nav.module.css";

export default function Nav (props) {
    return (
        <div className={styles.container}>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    )
}