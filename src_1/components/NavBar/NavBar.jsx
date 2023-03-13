import React from "react";
import logo from "../../../assets/logo.png"
import styleNav from "../NavBar/NavBar.module.css"
import {Link, NavLink} from "react-router-dom";

const NavLinkMe = ({to,children,...props}) => {
    return (
        <NavLink {...props}
        to={to}
        className={({isActive}) =>
            isActive ? styleNav.active : styleNav.disable
        }
        >
            {children}
        </NavLink>
    );
}

export default function Nav (props) {
    console.log(props)
    return (
        <div className={styles.container}>
        <NavLinkMe to="/home">
            Home
        </NavLinkMe> 
        <NavLinkMe to="/about">
            About
        </NavLinkMe>
        <SearchBar
          onSearch={(characterID) => props.onSearch(characterID)}
        />
      </div>
    )
}