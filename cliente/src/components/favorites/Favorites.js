import { connect } from "react-redux";
import Card from '../card/Card';
import styled from '../cards/Cards.module.css';
import styles from "../nav/Nav.module.css";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../reducer/actions";

function Favorites({myFavorites}) {

  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));
      default:
        break;
    }
  };

    return (
      <div>
          <div className={styles.container}>
          <select name="order" onChange={handleClick}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
          </select>
          <select name="filter" onChange={(e) => {dispatch(filterCards(e.target.value));}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
          </div>
        <div className={styled.tarjeta}>
           {myFavorites && myFavorites.map(({id,name,species,gender,image}) => (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
           ))}
        </div>
        </div>
        );
}

const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites
    };
  };

  export default connect(mapStateToProps, null)(Favorites);