import Card from '../card/Card';
import styled from '../cards/Cards.module.css';

export default function Cards(props) {
   const { characters } = props;

   return (
   <div className={styled.tarjeta}>
      {characters.map(({id,name,species,gender,image}) => (
       <Card
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         onClose={() => props.onClose(id)}
       />
      ))}
   </div>
   );
}
