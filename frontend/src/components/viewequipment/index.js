import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from '../../services/api';

import './styles.css';
import macbook from '../../assets/macbook.png';

export default function ViewEquipment() {
    const { id } = useParams(); // Captura o ID do equipamento da URL
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

    if (!equipment) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="viewequipment-container">
            <section className="form">
                <img src={macbook} alt="Equipamento" />
                <div className="camp">
                    <strong>Nome</strong>
                    <p>{equipment.name}</p>
                </div>
                <div className="camp">
                    <strong>Segmento</strong>
                    <p>{equipment.segment}</p>
                </div>
                <div className="camp">
                    <strong>Modelo</strong>
                    <p>{equipment.model}</p>
                </div>
                <div className="camp">
                    <strong>Número de Série</strong>
                    <p>{equipment.serial_number}</p>
                </div>
                <div className="camp">
                    <strong>Status</strong>
                    <p>{equipment.status}</p>
                </div>
                <div className="camp">
                    <strong>Data de Aquisição</strong>
                    <p>{equipment.acquisition_date}</p>
                </div>
                <Link to={`/atualizar/${id}`} className="button">Atualizar</Link>
            </section>
        </div>
    );
}
