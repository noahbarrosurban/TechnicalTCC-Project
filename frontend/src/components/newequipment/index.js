import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';
import generica from '../../assets/generica.png';

export default function NewEquipment() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [segment, setSegment] = useState('');
    const [model, setModel] = useState('');
    const [serial_number, setSerialNumber] = useState('');
    const [status, setStatus] = useState(''); // Mantém como string para o select
    const [acquisition_date, setDate] = useState('');

    async function createNewEquipment(e) {
        e.preventDefault();

        const booleanStatus = status === "Em Uso" ? false : true;

        const data = {
            name,
            segment,
            model,
            serial_number,
            status: booleanStatus,
            acquisition_date
        };

        try {
            await api.post('equipment/create', data);
            navigate('/equipamentos');
        } catch (error) {
            alert('Erro ao cadastrar equipamento, tente novamente.');
        }
    };

    return (
        <div className="newequipment-container">
            <section className="form">
                <img src={generica} alt="Upload" />
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
                            <option value="Software & Aplicações">Software</option>
                            <option value="Servidores & Rede">Servidores</option>
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
