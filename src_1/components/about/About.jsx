import React from "react";
import styles from "./About.module.css"

export default function About(props) {
    return (
        <div className={styles.container}>
            <h1>Bienvenidos</h1>
            <p>
                en esta App utilice los conocimientos adquiridos en SoyHenry
            </p>
            <img
            scr="https://www.google.com/imgres?imgurl=https%3A%2F%2Fw0.peakpx.com%2Fwallpaper%2F715%2F270%2FHD-wallpaper-deadpool-black-red.jpg&imgrefurl=https%3A%2F%2Fwww.peakpx.com%2Fes%2Fhd-wallpaper-desktop-kvfdr&tbnid=sKp-DICOLPJj2M&vet=12ahUKEwjwysWJv9D9AhVplIQIHXDlBngQMygDegUIARDnAQ..i&docid=ZA7-cPKzEqV7aM&w=800&h=711&q=deadpool&hl=es&ved=2ahUKEwjwysWJv9D9AhVplIQIHXDlBngQMygDegUIARDnAQ"
            alt="Not found"
            />
            <h3>Hola, soy Ubeimar</h3>
        </div>

    );
}