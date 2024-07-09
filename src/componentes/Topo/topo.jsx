import React from "react";

import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';

import topo from './topo.module.css';

function Topo(props) {

    return (
        <header className= {props.novaCor}>
           <img className= {topo.imgLogo} src={ logo } alt="Imagem Logo" />

           <button onClick={props.alterarTema} className= {[topo.botaoHeaderClaro, props.novaCor].join(" ")}>
            <img className= {topo.imgTopoClaro} src={ moon } alt="Dark Mode" />
           </button>
        </header>
    )
}

export default Topo;