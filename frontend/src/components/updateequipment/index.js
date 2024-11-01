import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from '../../services/api';

import './styles.css';
import macbook from '../../assets/macbook.png';

export default function UpdateEquipment() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [segment, setSegment] = useState('');
    const [model, setModel] = useState('');
    const [serial_number, setSerialNumber] = useState('');
    const [status, setStatus] = useState('');
    const [acquisition_date, setAcquisitionDate] = useState('');

    useEffect(() => {
        async function fetchEquipment() {
            try {
                const response = await api.get(`/equipment/read/${id}`);
                const equipment = response.data;
                setName(equipment.name);
                setSegment(equipment.segment);
                setModel(equipment.model);
                setSerialNumber(equipment.serial_number);
                setStatus(equipment.status ? "Em Estoque" : "Em Uso"); 
                setAcquisitionDate(equipment.acquisition_date);
            } catch (error) {
                console.error('Erro ao buscar o equipamento:', error);
            }
        }
        fetchEquipment();
    }, [id]);

    async function handleUpdate(e) {
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
            await api.put(`/equipment/update/${id}`, data);
            navigate(`/visualizar/${id}`);
        } catch (error) {
            alert('Erro ao atualizar equipamento, tente novamente.');
        }
    }

    async function handleDelete() {
        const confirmDelete = window.confirm("Tem certeza de que deseja excluir este equipamento?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/equipment/delete/${id}`);
            alert("Equipamento excluído com sucesso!");
            navigate("/equipamentos");
        } catch (error) {
            alert("Erro ao excluir equipamento, tente novamente.");
        }
    }

    return (
        <div className="updateequipment-container">
            <section className="form">
                <img src={macbook} alt="Equipamento" />
                <h1>Atualizar Equipamento</h1>
                <form onSubmit={handleUpdate}>
                    <div className="campo">
                        Nome
                        <input
                            placeholder="Exemplo & Exemplo"
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
                            <option value="" disabled>Exemplo & Exemplo</option>
                            <option value="Computadores & Notebooks">Computadores & Notebooks</option>
                            <option value="Periféricos & Acessórios">Periféricos & Acessórios</option>
                            <option value="Software & Aplicações">Software</option>
                            <option value="Servidores & Rede">Servidores</option>
                        </select>
                    </div>
                    <div className="campo">
                        Modelo
                        <input
                            placeholder="XXXXXxx/X"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </div>
                    <div className="campo">
                        Número de Série
                        <input
                            placeholder="Número de Série"
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
                            <option value="" disabled>Em...</option>
                            <option value="Em Uso">Em Uso</option>
                            <option value="Em Estoque">Em Estoque</option>
                        </select>
                    </div>
                    <div className="campo">
                        Data de Aquisição
                        <input
                            type="date"
                            value={acquisition_date}
                            onChange={e => setAcquisitionDate(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button className="button" type="submit">Salvar</button>
                        <button className="button delete" type="button" onClick={handleDelete}>Deletar</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
