import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

import mascote from '../../assets/mascote.png';
import macbook from '../../assets/macbook.png';

export default function Equipments() {
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
          <li>
            <img src={macbook} alt="" />
            <strong>Nome</strong>
            <Link to="/visualizar" className="button">Ver mais</Link>
          </li>
          <li>
            <img src={macbook} alt="" />
            <strong>Nome</strong>
            <Link to="/visualizar" className="button">Ver mais</Link>
          </li>
          <li>
            <img src={macbook} alt="" />
            <strong>Nome</strong>
            <Link to="/visualizar" className="button">Ver mais</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}