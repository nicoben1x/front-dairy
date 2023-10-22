import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Noticias.css';
import NoticiasCard from '../NoticiasCard/NoticiasCard';
import imgReunion from "./reunion.jpg"
import { apiUrl } from "../API/ApiConfig"


// Este es el objeto Usuario que usamos si ya esta logeado el usuario
// const storedUser = JSON.parse(localStorage.getItem('user'));




function Noticias() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la API de noticias
    fetch(`${apiUrl}/api-item-noticias.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Datos de noticias recibidos:', data); // Agrega este console.log
        setNoticias(data.noticiasItems);
      })
      .catch((error) => console.error('Error al obtener noticias:', error));
  }, []);

  return (
    <div className="Noticias" id="areaNoticiastheId">
      <h2 className="h2Noticias">NOTICIAS</h2>
      <div className="areaNoticias">

    
        {noticias.map((noticia) => (
          <NoticiasCard
            key={noticia.id}
            img={noticia.imagen}
            titulo={noticia.titulo}
            descripcion ={noticia.contenido}
          />
        ))}
      </div>
      <a href="/noticias">Ver más.</a>
    </div>
  );
}

export default Noticias;


