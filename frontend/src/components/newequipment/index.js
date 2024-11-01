import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import generica from '../../assets/generica.png';

export default function NewEquipment() {

    const [name, setName] = useState('');
    const [segment, setSegment] = useState('');
    const [model, setModel] = useState('');
    const [serial_number, setSerialNumber] = useState('');
    const [status, setStatus] = useState(''); // Mantém como string para o select
    const [acquisition_date, setDate] = useState('');

    const navigate = useNavigate();

    async function createNewEquipment(e) {
        e.preventDefault();

        // Mapeia o status para booleano
        const booleanStatus = status === "Em Uso" ? false : true;

        const data = {
            name,
            segment,
            model,
            serial_number,
            status: booleanStatus, // Envia o valor booleano
            acquisition_date
        };

        try {
            await api.post('equipment/create', data);
            navigate('/');
        } catch (error) {
            let errorMessage = 'Erro ao cadastrar equipamento, tente novamente.';
            if (error.response) {
                errorMessage += ` Detalhes: ${error.response.data.message || error.response.statusText}`;
            } else if (error.request) {
                errorMessage += ' Nenhuma resposta do servidor.';
            } else {
                errorMessage += ` Erro: ${error.message}`;
            }
            alert(errorMessage);
        }
    };

    return (
        <div className="newequipment-container">
            <section className="form">
                <img src={generica} alt="" />
                <h1>Cadastrar Equipamento</h1>
                <form onSubmit={createNewEquipment}>
                    <div className="campo">
                        Nome
                        <input placeholder="Exemplo & Exemplo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="campo">
                        Segmento
                        <select
                            value={segment}
                            onChange={e => setSegment(e.target.value)}
                        >
                            <option value="" disabled>Selecione um segmento</option>
                            <option value="Computadores & Notebooks">Computadores & Notebooks</option>
                            <option value="Periféricos & Acessórios">Periféricos & Acessórios</option>
                            <option value="Software">Software</option>
                            <option value="Servidores">Servidores</option>
                            <option value="Rede">Rede</option>
                            <option value="Impressoras">Impressoras</option>
                        </select>
                    </div>
                    <div className="campo">
                        Modelo
                        <input placeholder="XXXXXxx/X"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </div>
                    <div className="campo">
                        Número de Série
                        <input placeholder="Número de Série"
                            value={serial_number}
                            onChange={e => setSerialNumber(e.target.value)}
                        />
                    </div>
                    <div className="campo">
                        Status
                        <select
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                            <option value="" disabled>Selecione um status</option>
                            <option value="Em Uso">Em Uso</option>
                            <option value="Em Estoque">Em Estoque</option>
                        </select>
                    </div>
                    <div className="campo">
                        Data de Aquisição
                        <input type="date"
                            value={acquisition_date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </section>
        </div>
    );
}
