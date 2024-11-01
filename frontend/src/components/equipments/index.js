import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api';

import './styles.css';

import mascote from '../../assets/mascote.png';
import macbook from '../../assets/macbook.png';

export default function Equipments() {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    async function fetchEquipments() {
      try {
        const response = await api.get('/equipment/read');
        const allEquipments = response.data;
        const latestEquipments = allEquipments.reverse();
        setEquipments(latestEquipments);
      } catch (error) {
        console.error('Erro ao buscar equipamentos:', error);
      }
    }

    fetchEquipments();
  }, []);

  return (
    <div className="equipments-container">

      <div className="equipments-body">
        <img src={mascote} alt="Mascote" />
        <div className="text-content">
          <span>Olá, <strong>Gerente</strong> de TI</span>
          <p>Seja bem-vindo(a) à área de Gerenciamento de Equipamentos de TI.</p>
          <p>Veja os <strong>equipamentos cadastrados</strong> ou acesse <strong>cadastrar equipamento</strong> para inserir novas unidades no sistema.</p>
          <Link to="/cadastro" className="button">Cadastrar Equipamentos</Link>
        </div>
      </div>

      <div>
        <h1 className="equipments-title">Equipamentos Cadastrados</h1>
      </div>

      <div>
        <ul>
          {equipments.map((equipment) => (
            <li key={equipment.id}>
              <img src={macbook} alt="" />
              <strong>{equipment.name}</strong>
              <Link to={`/visualizar/${equipment.id}`} className="button">Ver mais</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
