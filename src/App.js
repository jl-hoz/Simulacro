import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Definicion from './components/Definicion';
import Sinonimos from './components/Sinonimos';
import Antonimos from './components/Antonimos';

const App = () => {

  const [palabra, setPalabra] = useState('');

  const [definiciones, setDefiniciones] = useState(null);
  const [sinonimos, setSinonimos] = useState(null);
  const [antonimos, setAntonimos] = useState(null);


  const endpoint = 'http://sesat.fdi.ucm.es:8080/servicios/rest';
  

  useEffect(() => {
      if (palabra !== '') {

        const definitionEndpoint = `${endpoint}/definicion/json/${palabra}`;
        const sinonimosEndpoint = `${endpoint}/sinonimos/json/${palabra}`;
        const antonimosEndpoint = `${endpoint}/antonimos/json/${palabra}`;

        axios.get(definitionEndpoint)
          .then((response) => {
              console.log(response.data.definiciones);
              setDefiniciones(response.data.definiciones);
          });
        
        axios.get(sinonimosEndpoint)
          .then((response) => {
              console.log(response.data.sinonimos);
              setSinonimos(response.data.sinonimos);
          });

        axios.get(antonimosEndpoint)
          .then((response) => {
              console.log(response.data.antonimos);
              setAntonimos(response.data.antonimos);
          });
      }else{
        setDefiniciones(null);
        setSinonimos(null);
        setAntonimos(null);
      }
  }, [palabra]);

  const handleSearch = (searchValue) => {
    setPalabra(searchValue);
  };

  return (
    <div className="App">
      <h1>Diccionario</h1>
      <input id="searchValue" type="text" placeholder="Introduzca una palabra!" />
      <button onClick={() => handleSearch(document.getElementById("searchValue").value)}>
          Buscar
      </button>
      {definiciones ? <Definicion content={definiciones}></Definicion> : null}
      {sinonimos ? <Sinonimos content={sinonimos}></Sinonimos> : null}
      {antonimos ? <Antonimos content={antonimos}></Antonimos> : null}
    </div>
  );
}

export default App;
