import React,{useState} from "react"
import style from "../form/Form.module.css"
import { validation } from "./validation";

export default function Form(props){
    const [userData, setUserData] = useState({username: '', password: '' });
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
                name="username"
                placeholder=" Ingrese el Usuario"
                type='text'
                value={userData.username}
                onChange={handleInputChange}
            />                
        </div>
        
        {errors.username ? (<p className={style.danger}>{errors.username}</p>) : null}<br/>

        <div>
            <label>Password: </label>
            <input
                name="password"
                placeholder=" Ingrese el password"
                type='password'
                value={userData.password}
                onChange={handleInputChange}
            />     
        </div>
        {errors.password ? (<p className={style.danger}>{errors.password}</p>) : null}<br/>
        <button type="submit">Login</button>
    </form>
    </div>
}