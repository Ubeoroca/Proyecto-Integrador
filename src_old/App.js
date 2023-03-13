import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import {Routes, Route} from 'react-router-dom'

function App () {
  const [characters, setCharacters] = useState([])
  const onSearch = (character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      data.name ? setCharacters([...characters, data]):
      alert('No se encuentra el personaje')

    })
    .catch((error) => console.log(error));
  }

/* const onClose = (id) => {
  const filtro = characters.filter((char)=>char.id !== Number(id))
  setCharacters(filtro)
} */

function onClose(id) {
  setCharacters(characters.filter((element)=> element.id !== id));
}

  return (
    <div className='App' style={{padding: '25px'}}>
      <Nav onSearch={onSearch}/>
{/*       <Cards characters={characters} onClose={onClose}/> */}
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
    </div>
  );
}

export default App