import React from "react";
import { Link } from "react-router-dom";

import './styles.css';
import macbook from '../../assets/macbook.png';

export default function ViewEquipment() {
    return (
        <div className="viewequipment-container">
            <section className="form">
                <img src={macbook} alt="" />
                <h1>Nome</h1>
                <div className="camp">
                    Nome
                </div>
                <div className="camp">
                    Segmento
                </div>
                <div className="camp">
                    Modelo
                </div>
                <div className="camp">
                    Número de Série
                </div>
                <div className="camp">
                    Status
                </div>
                <div className="camp">
                    Data de Aquisição
                </div>
                <Link to="/atualizar" className="button">Atualizar</Link>
            </section>
        </div>
    );
}