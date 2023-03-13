import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Form from './components/form/Form'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

function App () {
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  const onSearch = (id)=> {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      (data.name ? characters.filter((char) => char.id === data.id).length === 0 : "")
      ? setCharacters([...characters, data]): alert('Ya esiste el Personaje')
    })
    .catch((error) => console.log(error));
  }

function onClose(id) {
  setCharacters(characters.filter((element)=> element.id !== id));
}

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

function logout () {
  setAccess(false)
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{padding: '25px'}}>
      <div>
        {location.pathname !=='/' && <Nav onSearch={onSearch} logout={logout}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App
