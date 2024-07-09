import React from "react";

import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';
import googleplus from '../../assets/googleplus.png';

import rodape from './rodape.module.css';

function Rodape(props) {

    return (
        <footer className= {props.novaCor}>
            <img className= {rodape.logoFooter} src={ logo } alt="Logo Marca" />
            <p className= {rodape.textoFooter} >Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
            <div className= {rodape.containerItens}>
                <img className= {rodape.iconeFooter} src={ facebook } alt="Facebook" />
                <img className= {rodape.iconeFooter} src={ twitter } alt="Twitter" />
                <img className= {rodape.iconeFooter} src={ linkedin } alt="Linkedin" />
                <img className= {rodape.iconeFooter} src={ dribble } alt="Dribble" />
                <img className= {rodape.iconeFooter} src={ behance } alt="Behance" />
                <img className= {rodape.iconeFooter} src={ googleplus } alt="Google Plus" />
            </div>
            <p className= {rodape.copyFooter}>Copyright 2022 &copy; <span>nome do desenvolvedor</span></p>
        </footer>
    )
}

export default Rodape;