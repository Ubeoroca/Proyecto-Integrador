import { useState, useEffect} from 'react'
import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import Form from './components/form/Form'
import Favorites from './components/favorites/Favorites'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import axios from "axios";

function App () {
  const location = useLocation()
  const [characters, setCharacters] = useState([])
  const onSearch = (id)=> {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { id } = data;
      const char = characters.find((char) => char.id === id);
      if (id) {
        if (char) return alert("Personaje ya existe");
        setCharacters([...characters, data]);
      } else {
        alert(data.error);
      }
/*       (data.name ? characters.filter((char) => char.id === data.id).length === 0 : alert(data.error))
      ? setCharacters([...characters, data]): alert('Ya esiste el Personaje') */
    })
    .catch((error) => console.log(error));
  }

function onClose(id) {
  setCharacters(characters.filter((element)=> element.id !== id));
}

const navigate = useNavigate();
const [access, setAccess] = useState(false);

/* const username = 'ejemplo@gmail.com';
const password = '1password';
const login = (userData) => {
  if(userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home")
    }else{
      alert("Datos incorrectos, por favor verifique")
    }
  setAccess(true);
  navigate("/home");
}; */

function login(userData) {
  const { username, password } = userData;
  const URL = "http://localhost:3001/rickandmorty/login/";
  axios(`${URL}?email=${username}&password=${password}`).then(({ data }) => {
    const { access } = data;
    setAccess(data);
    access && navigate("/home");
  });
}

function logout () {
  setAccess(false)
}

useEffect(() => {
  !access && navigate('/');
  // eslint-disable-next-line
}, [access, navigate]);

  return (
    <div className='App' style={{padding: '25px'}}>
      <div>
        {location.pathname !=='/' && <Nav onSearch={onSearch} logout={logout}/>}
      </div>
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='favorites' element={<Favorites/>} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App
