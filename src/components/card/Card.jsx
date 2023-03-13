import style from "../card/Card.module.css";
import {Link} from "react-router-dom";


export default function Card(props) {
   return (
     <div className={style.card}>
        <div>
          <p className={style.nam}>
          <button onClick={props.onClose}className={`${style.boton}`}>
            X
          </button>
          {props.name}
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
