import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [numeroClicks, setNumeroClicks] = useState(0);

  const hacerClick = () => {
    setNumeroClicks(numeroClicks + 1);
  };
  const reinicarContador = () => {
    setNumeroClicks(0);
  };
  return (
    <div className='App'>
      <div className='freecodecampLogoContenedor'>
        <h1 className='title'>Contador de Clicks</h1>
      </div>
      <div className='contenedorPrincipal'>
        <Contador numeroClicks={numeroClicks} />
        <Boton texto='Click' esBotonDeClick={true} manejarClick={hacerClick} />
        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reinicarContador}
        />
      </div>
    </div>
  );
}

export default App;
