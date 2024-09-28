import React from "react";

import './styles.css';

import macbook from '../../assets/macbook.png';

export default function UpdateEquipment() {
    return (
        <div className="updateequipment-container">
            <section className="form">
                <img src={macbook} alt="" />
                <h1>Atualizar Equipamento</h1>
                <form>
                    <div className="camp">
                        Nome
                        <input placeholder="Exemplo & Exemplo" />   
                    </div>
                    <div className="camp">
                        Segmento
                        <input placeholder="Exemplo" />
                    </div>
                    <div className="camp">
                        Modelo
                        <input placeholder="XXXXXxx/X" />
                    </div>
                    <div className="camp">
                        Número de Série
                        <input placeholder="Número de Série" />
                    </div>
                    <div className="camp">
                        Status
                        <input placeholder="Em..." />
                    </div>
                    <div className="camp">
                        Data de Aquisição
                        <input type="date" />
                    </div>
                </form>
                <button className="button" type="submit">Salvar</button>
            </section>
        </div>
    );
}