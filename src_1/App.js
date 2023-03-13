import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import About from "./components/about/About.jsx"
import Detail from "./components/detail/Detail.jsx"

function App () {
  const [characters, setCharacters] = useState([])

  const onSearch = (id)=> {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      (
        data.name 
        ? characters.filter((char) => char.id === data.id).length === 0
        : ""
      )
      ? setCharacters([...characters,data])
      :alert ("Personaje ya existe");
    })
    .catch((error) => console.log(error));
  };

const onClose = (id) => {
  const filtro = characters.filter((char)=>char.id !== Number(id));
  setCharacters(filtro);
};

/*   return (
    <div className='App' style={{ padding: '25px',}}>
      <Nav onSearch={onSearch}/>
      <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}; */


  return (
    <div
    className='App'
    style={{
      padding: "25px",
    }}
    >
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
        path="/home"
        element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About/>}/>
        <Route path="detail/:detailid" element={<Detail/>}/>
      </Routes>
    </div>
  );
}


export default App
