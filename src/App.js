import React, {useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 1rem 3rem;
  font-size: 2rem;
  border: 4px solid #000;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.3s;
  padding: 10px;

  &:hover{
    background: #fff;
    color: #007d35;
  }

`

function App() {

  const [frase, guardarFrase] = useState({});

  // click para obtener respuesta de API
  const consultarApi = async () => {
    const resultado = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const frase = await resultado.json();
    guardarFrase(frase[0]);
  }

  // cargar una frase
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton
        onClick={consultarApi}
        >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
