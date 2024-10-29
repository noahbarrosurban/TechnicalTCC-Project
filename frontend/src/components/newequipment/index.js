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
    const [status, setStatus] = useState('');
    const [acquisition_date, setDate] = useState('');

    const navigate = useNavigate();

    async function createNewEquipment(e) {
        e.preventDefault();

        const data = {
            name,
            segment,
            model,
            serial_number,
            status,
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
                <h1>Cadastrar Novo Equipamento</h1>
                <form onSubmit={createNewEquipment}>
                    <div className="camp">
                        Nome
                        <input placeholder="Exemplo & Exemplo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Segmento
                        <input placeholder="Exemplo"
                            value={segment}
                            onChange={e => setSegment(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Modelo
                        <input placeholder="XXXXXxx/X"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Número de Série
                        <input placeholder="Número de Série"
                            value={serial_number}
                            onChange={e => setSerialNumber(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Status
                        <input placeholder="Em..."
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>
                    <div className="camp">
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