import React, { useState, useEffect } from 'react';
import './NuevoNoticiaForm.css';
import { apiUrl, apiUrl2} from '../ApiConfig';
import { useParams } from 'react-router-dom';

function NuevoNoticiaFormEdit(props) {
    const [titulo, setTitulo] = useState('');
    const [imagen, setImagen] = useState(null);
    const [contenido, setContenido] = useState('');
    const [fecha, setFecha] = useState(getCurrentDate());
    const { id } = useParams();

    useEffect(() => {

        console.log(id);
       

        if (id) {
            // Realizar una solicitud al servidor para obtener los datos de la noticia
            fetch(`${apiUrl}/api-item-noticias.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.noticia) {
                        console.log(data.noticia);
                        const noticia = data.noticia;
                        // Actualizar el estado del componente con los datos de la noticia
                        setTitulo(noticia.titulo);
                        // Aquí puedes asignar la URL de la imagen si la tienes disponible
                        setContenido(noticia.contenido);
                        setFecha(noticia.fecha);
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    }, [id]);

    function getCurrentDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'titulo':
                setTitulo(value);
                break;
            case 'contenido':
                setContenido(value);
                break;
            case 'fecha':
                setFecha(value);
                break;
            default:
                break;
        }
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
            // Lee el contenido del archivo como base64
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagen(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const fechaParts = fecha.split('/');
        const formattedDate = `${fechaParts[0]}/${fechaParts[1]}/${fechaParts[2]}`;

        const formData = new FormData();
        formData.append('id', id);
        formData.append('titulo', titulo);
        formData.append('imagen', imagen);
        formData.append('contenido', contenido);
        formData.append('fecha', formattedDate);
        console.log(formData);
        const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Convertir objeto JavaScript a JSON y luego imprimirlo
    const formDataJson = JSON.stringify(formDataObject);
    console.log(formDataJson);

        fetch(`${apiUrl}/api-item-noticias.php`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
              },
            body: formDataJson,
        })
            .then(response => response.json())
            .then(data => {
                // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxitoo
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="nuevo-noticia-form-container">
            <h1 className="nuevo-noticia-form-title">Noticia</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="nuevo-noticia-form">
                <label htmlFor="titulo" className="nuevo-noticia-form-label">Título:</label>
                <input
                    type="text"
                    name="titulo"
                    id="titulo"
                    value={titulo}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-input"
                />
                <br />

                <label htmlFor="imagen" className="nuevo-noticia-form-label">Imagen:</label>
                <input
                    type="file"
                    name="imagen"
                    id="imagen"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="nuevo-noticia-form-input"
                />
                <br />

                <label htmlFor="contenido" className="nuevo-noticia-form-label">Contenido:</label>
                <textarea
                    name="contenido"
                    id="contenido"
                    rows="5"
                    value={contenido}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-textarea"
                ></textarea>
                <br />

                <label htmlFor="fecha" className="nuevo-noticia-form-label">Fecha (dd/mm/aaaa):</label>
                <input
                    type="text"
                    name="fecha"
                    id="fecha"
                    value={fecha}
                    onChange={handleInputChange}
                    required
                    className="nuevo-noticia-form-input"
                />
                <br />

                <input type="submit" value="Enviar" className="nuevo-noticia-form-submit" />
                <input type="button" value="Cancelar" onClick={() => window.location.href = `${apiUrl2}`} className="nuevo-noticia-form-cancel" />
            </form>
        </div>
    );
}

export default NuevoNoticiaFormEdit;
