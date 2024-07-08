import React, { useState } from 'react';

import Topo from './componentes/Topo/topo';
import SecaoBanner from './componentes/SecaoBanner/secaobanner';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho/secaoexperienciatrabalho';
import Rodape from './componentes/Rodape/rodape';

import './App.css';

export default function App() {

  const [novaCor, setNovaCor] = useState('modoClaro');

  return (
    <div className="App">
        <Topo qualCor = { novaCor } />
        <SecaoBanner qualCor = {novaCor} />
        <SecaoExperienciaTrabalho qualCor = {novaCor} />
        <Rodape qualCor = {novaCor} />
    </div>
  );
}