import React from "react";

import banner from './banner.module.css';

function SecaoBanner() {
    return (
        <section className= {banner.secaoBanner}>
            <div className= {banner.modoClaroBanner}>
                <div className= {banner.imgFundo}></div>
            </div>

            <div className= {banner.containerTexto}>
                <p className= {banner.textoBanner}>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2 className= {banner.subtitulo}>Agência de Branding</h2>
                <span className= {banner.spanBanner}>e design digital</span>
            </div>
        </section>
    )
}

export default SecaoBanner;