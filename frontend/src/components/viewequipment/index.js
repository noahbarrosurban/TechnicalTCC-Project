import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from '../../services/api';
import './styles.css';
import macbook from '../../assets/macbook.png';

export default function ViewEquipment() {
    const { id } = useParams(); 
    const [equipment, setEquipment] = useState(null);

    useEffect(() => {
        async function fetchEquipment() {
            try {
                const response = await api.get(`/equipment/read/${id}`);
                setEquipment(response.data);
            } catch (error) {
                console.error('Erro ao buscar o equipamento:', error);
            }
        }

        fetchEquipment();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const formatStatus = (status) => {
        return status ? "Em Estoque" : "Em Uso";
    };

    if (!equipment) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="viewequipment-container">
            <section className="form">
                <img src={macbook} alt="Equipamento" />
                <h1>Visualizar Equipamento</h1>
                <div className="camp">
                    <label>Nome</label>
                    <input type="text" value={equipment.name} disabled />
                </div>
                <div className="camp">
                    <label>Segmento</label>
                    <input type="text" value={equipment.segment} disabled />
                </div>
                <div className="camp">
                    <label>Modelo</label>
                    <input type="text" value={equipment.model} disabled />
                </div>
                <div className="camp">
                    <label>Número de Série</label>
                    <input type="text" value={equipment.serial_number} disabled />
                </div>
                <div className="camp">
                    <label>Status</label>
                    <input type="text" value={formatStatus(equipment.status)} disabled />
                </div>
                <div className="camp">
                    <label>Data de Aquisição</label>
                    <input type="text" value={formatDate(equipment.acquisition_date)} disabled />
                </div>
                <Link to={`/atualizar/${id}`} className="button">Atualizar</Link>
            </section>
        </div>
    );
}
