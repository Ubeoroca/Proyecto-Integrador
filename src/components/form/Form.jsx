import React,{useState} from "react"
import style from "../form/Form.module.css"
import { validation } from "./validation";

export default function Form(props){
    
    const [userData, setUserData] = useState({ username: '', password: '' });

    const [errors, setErrors] = useState ({ username: '', password: '' });

    function handleInputChange(e) {
        setUserData({...userData, [e.target.name]:e.target.value});
        setErrors(validation({...userData, [e.target.name]:e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return <div className={style.form}>
    <form onSubmit={handleSubmit}><br/>
        <div>
            <label htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                placeholder=" Ingrese el Usuario"
                type='text'
                value={userData.username}
                onChange={handleInputChange}
            />                
        </div>

        <p className={style.danger}>{errors.username}</p><br/>

        <div>
            <label>Password: </label>
            <input
                id="password"
                name="password"
                placeholder=" Ingrese el password"
                type='password'
                value={userData.password}
                onChange={handleInputChange}
            />     
        </div>
        <p className={style.danger}>{errors.password}</p><br/>
        <button>LOGIN</button>
    </form>
    </div>
}