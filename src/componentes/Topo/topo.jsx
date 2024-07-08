import React from "react";

import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';

import topo from './topo.module.css';

function Topo(props) {

    const alterarState = () => {
        props.qualCor === "modoClaro" ? props.setState("modoEscuro") : props.setState("modoClaro");
    };

    return (
        <header className= {topo.modoClaro}>
           <img className= {topo.imgLogo} src={ logo } alt="Imagem Logo" />

           <button onClick={alterarState} className= {topo.botaoHeaderClaro}>
            <img className= {topo.imgTopoClaro} src={ moon } alt="Dark Mode" />
           </button>
        </header>
    )
}

export default Topo;