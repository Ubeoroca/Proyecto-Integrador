import React, { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import style from "../detail/Detail.module.css"

export default function Detail(){
  const navigate = useNavigate();
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            setCharacter({
              name: char.type,
              status: char.status,
              specie: char.specie,
              gender: char.gender,
              origina: char.origin.name,
              image: char.image,
              location: char.location.name,
          });
            char.name ? setCharacter(char) : alert("No hay personajes con ese ID");
            })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
      }, [detailId]);

    return (
        <div className={style.divPrincipal}>
          <div><button onClick={()=>navigate(-1)}>Regresar</button></div>
            <div className={style.info}>
            <h2 className={style.texto}>Name : {character.name}</h2>
            <h2 className={style.texto}>Status : {character.status}</h2>
            <h2 className={style.texto}>Specie : {character.species}</h2>
            <h2 className={style.texto}>Gender : {character.gender}</h2>
            <h2 className={style.texto}>Location : {character.location?.name}</h2>
            <h2 className={style.texto}>Origin : {character.origin?.name}</h2>
            </div>
            <img className={style.image} src={character.image} alt=""/>
        </div>
    )
}