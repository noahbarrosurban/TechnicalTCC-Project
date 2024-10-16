import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles.css';
import imagem from '../../assets/login.png';

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function login(event) {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/auth/login', 
                { username, password }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            const { token } = response.data;

            // Armazene o token JWT no localStorage
            localStorage.setItem('token', token);

            // Navegue para a rota desejada após o login bem-sucedido
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao fazer login', error);
            alert('Falha no login, verifique suas credenciais');
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
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>
            <img src={imagem} alt='Login'/>
        </div>
    );
}