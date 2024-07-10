import React from "react";

import style from './style.module.css';

import Card from "../Card/card";

function SecaoExperienciaTrabalho(props) {
    return (
        <section>
            <div className= {[style[props.qualCor], style.modoClaro].join(" ")}>
                <h2 className= {style.subtitleClaro}>Experiências De Trabalho</h2>
                <p className= {style.paragrafoClaro}>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.</p>
            </div>  

            <div className= {[style[props.qualCor], style.modoClaro].join(" ")}>
                <div className={style.card}>
                    <Card 
                        data="JUNHO 2012 - 2016"
                        titulo="Web Designer"
                        empresa="Pied Piper StartUp."
                        paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                    />
                    <Card 
                        data="AGOSTO 2016 - 2019"
                        titulo="Product Designer"
                        empresa="E Corp."
                        paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
                    />
                    <Card 
                        data="FEVEREIRO 2019 - 2021"
                        titulo="Digital Consulting"
                        empresa="Arasaka Inc."
                        paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default SecaoExperienciaTrabalho;