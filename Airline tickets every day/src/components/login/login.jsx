
import './login.css'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';



function Login (){

    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    return (

        <div>

            <form className='formulario' action="">

                <h1 id='title1'>Login</h1>

                <br /> <br />

                <label htmlFor="email">
                    <input placeholder='Digite seu email' type="email" id='email' />
                </label>

                <br />

                <label htmlFor="">
                    <input onChange placeholder='Digite sua senha' type="password" id='password'/>
                </label>

                <br />

                <button onClick={() => navigate('/passagens')} type='submite' id='botao'>Entrar</button>

            </form>

        </div>
    )
};

export default Login;