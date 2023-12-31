import React, { useEffect, useState } from 'react';
import './ItemNoticias.css';
import { apiUrl } from "../ApiConfig";
import NoticiasCard from '../../NoticiasCard/NoticiasCard';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate



function ItemNoticias({isLoggedIn, usuarioObj, isNoticias,setIsNoticias}) {

    const [noticias, setNoticias] = useState([]);

    const navigate = useNavigate(); // Obtiene la función de navegación



    useEffect(() => {
        setIsNoticias(true);

     
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
        <div className='item-noticias-div"'>

            <h1>Noticias</h1>


            {/*Solo se renderiza si esta un usuario logeado y si es rol Jefe */}
            {isLoggedIn && usuarioObj && usuarioObj.rol === 'Jefe' && (

                <button onClick={() => navigate('/noticiasform')}>Agregar Noticia</button>
            )}



            <div className="areaNoticias">


                {noticias.map((noticia) => (
                    <NoticiasCard
                        key={noticia.id}
                        idd={noticia.id}
                        img={noticia.imagen}
                        titulo={noticia.titulo}
                        descripcion={noticia.contenido}
                        fecha={noticia.fecha}
                        isNoticias={isNoticias}
                    />
                ))}
            </div>




        </div>
    );
}

export default ItemNoticias;
