import style from "../card/Card.module.css";

export default function Card(props) {
   return (
      <div className={style.card}>
         <button onClick={props.onClose} className={`${style.boton}`}>X</button>
         <div className={style.imgDiv}>
            <img className={style.img} src={props.image} alt="Not Found"/>            
            <h2  className={style.name}>{props.name}</h2>
         </div>
         <div className={style.propsContainer}>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         </div>
      </div>
   );
}
