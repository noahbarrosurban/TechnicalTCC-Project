import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from '../../services/api';

import './styles.css';
import macbook from '../../assets/macbook.png';

export default function UpdateEquipment() {
    const { id } = useParams(); // Captura o ID da URL
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [segment, setSegment] = useState('');
    const [model, setModel] = useState('');
    const [serial_number, setSerialNumber] = useState('');
    const [status, setStatus] = useState('');
    const [acquisition_date, setAcquisitionDate] = useState('');

    // Busca os dados do equipamento
    useEffect(() => {
        async function fetchEquipment() {
            try {
                const response = await api.get(`/equipment/read/${id}`);
                const equipment = response.data;
                setName(equipment.name);
                setSegment(equipment.segment);
                setModel(equipment.model);
                setSerialNumber(equipment.serial_number);
                setStatus(equipment.status);
                setAcquisitionDate(equipment.acquisition_date);
            } catch (error) {
                console.error('Erro ao buscar o equipamento:', error);
            }
        }
        fetchEquipment();
    }, [id]);

    // Função para atualizar o equipamento
    async function handleUpdate(e) {
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
            await api.put(`/equipment/update/${id}`, data);
            navigate(`/visualizar/${id}`); // Redireciona para a página de visualização do equipamento
        } catch (error) {
            alert('Erro ao atualizar equipamento, tente novamente.');
        }
    }

    // Função para deletar o equipamento
    async function handleDelete() {
        const confirmDelete = window.confirm("Tem certeza de que deseja excluir este equipamento?");
        if (!confirmDelete) return;

        try {
            await api.delete(`/equipment/delete/${id}`);
            alert("Equipamento excluído com sucesso!");
            navigate("/equipamentos"); // Redireciona para a lista de equipamentos após exclusão
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
                    <div className="camp">
                        Nome
                        <input
                            placeholder="Exemplo & Exemplo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Segmento
                        <input
                            placeholder="Exemplo"
                            value={segment}
                            onChange={e => setSegment(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Modelo
                        <input
                            placeholder="XXXXXxx/X"
                            value={model}
                            onChange={e => setModel(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Número de Série
                        <input
                            placeholder="Número de Série"
                            value={serial_number}
                            onChange={e => setSerialNumber(e.target.value)}
                        />
                    </div>
                    <div className="camp">
                        Status
                        <input
                            placeholder="Em..."
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        />
                    </div>
                    <div className="camp">
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
