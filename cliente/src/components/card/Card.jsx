import style from "../card/Card.module.css";
import {Link} from "react-router-dom";
import { addFavorite ,  deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card (props) {

  const {id, deleteFavorite, addFavorite, myFavorites} = props;

  const [isFav,setIsFav] = useState (false);
  
  const handleFavorite = () => {
    if(isFav) {
      setIsFav (false)
      deleteFavorite(id)
    } else {
      setIsFav(true)
      addFavorite(props)
    }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

   return (
     <div className={style.card}>
        <div>
          <p className={style.nam}>
          {props.name}
          {isFav ? null : (
          <button onClick={props.onClose}className={`${style.boton}`}>
            X
          </button>
          )}
          {isFav ? (
          <button onClick={handleFavorite}className={`${style.botonFav}`}>❤️</button>
          ) : (
          <button onClick={handleFavorite}className={`${style.botonFav}`}>🤍</button>
          )}
          </p>
          <Link to={`/detail/${props.id}`} className={style.link}>
          <img className={style.img} src={props.image} alt="Not Found"/>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </Link>
        </div>
      </div>
   );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);