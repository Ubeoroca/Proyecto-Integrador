import Card from '../card/Card';
import styled from '../cards/Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return (
   <div className={styled.tarjeta}>
      {characters.map((e) => (
       <Card
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => alert ('Emulamos que se cierra la Card')}
         key={i++}
       />
      ))}
   </div>
   );
}
