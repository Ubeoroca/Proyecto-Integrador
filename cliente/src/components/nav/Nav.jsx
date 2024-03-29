import React from "react";
import SearchBar from "../searchbar/SearchBar";
import styles from "../nav/Nav.module.css";
import {Link} from "react-router-dom";

export default function Nav (props) {
    return (
        <div className={styles.container}>
        <Link className={styles.links} to='/home'>Home</Link>
        <Link className={styles.links} to='/favorites'>Favorites</Link>
        <Link className={styles.links} to='/about'>About</Link>
        <button className={styles.links} onClick={props.logout}>logout</button>
        <SearchBar onSearch={(characterID) => props.onSearch(characterID)}/>
      </div>
    )
}