import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css';
import api from '../../services/api';
import imagem from '../../assets/login.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault();
        const data = {
            username,
            password
        };

        try {
            const response = await api.post('/login', data);
            localStorage.setItem('username', username);
            localStorage.setItem('jwt', response.data.token);
            navigate('/equipamentos');
        } catch (error) {
            alert('Erro ao realizar login, tente novamente.');
        }
    }
    
    return (
        <div className='login-container'>
            <section className='form'>
                <form onSubmit={login}>
                    <h1>Acesse sua conta</h1>
                    <h2>Bem vindo ao nosso sistema de gestão de TI.</h2>

                    <input 
                        placeholder="Username" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />

                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
            <section className='image'>
                <img src={imagem} alt='Login'/>
            </section>
        </div>
    );
}
