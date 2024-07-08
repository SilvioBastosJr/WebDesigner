import React from "react";

import card from './card.module.css';

export default function Card(props) {
    return (
        <section className= {card.secaoCard}>
                <div className={card.containerCard}>
                    <p className={card.paragrafo}>{props.data}</p>
                    <h2 className={card.modoClaroSubtitulo}>{props.titulo}</h2>
                    <p className={card.paragrafo}>{props.empresa}</p>
                    <p className={card.paragrafo}>{props.paragrafo}</p>
                </div>
        </section>
    )
}

