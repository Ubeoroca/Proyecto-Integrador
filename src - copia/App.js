import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
/* import characters from './data.js' */
import Nav from './components/nav/Nav'

function App () {
  const [characters, setCharacters] = useState([])

/*   const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 }; */

  const onSearch = (character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      data.name ? setCharacters([...characters, data]):
      alert('No se encuentra el personaje')
/*        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       } */
    })
    .catch((error) => console.log(error));
  }

const onClose = (id) => {
  const filtro = characters.filter((char)=>char.id !== Number(id))
  setCharacters(filtro)
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
