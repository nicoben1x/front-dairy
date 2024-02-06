import './SonUsers.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../ApiConfig"
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function SonUsers({ usuarioObj, isLoggedIn }) {

    const [sonusers, setSonusers] = useState([]);

    const navigate = useNavigate(); // Obtiene la función de navegación

    useEffect(() => {

           // Verificar si hay información de usuario en el almacenamiento local
           const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
           const storedUsuarioObj = JSON.parse(localStorage.getItem('usuarioObj'));
   
   
           // Si no hay un usuario autenticado, redirigir a la página de inicio
           if (!storedIsLoggedIn || !storedUsuarioObj) {
               navigate('/');
           }




        // Realiza una solicitud GET a la API de noticias
        fetch(`${apiUrl}/api-get-sonusers.php`)
          .then((response) => response.json())
          .then((data) => {
            console.log('Datos de sonusers recibidos:', data); // Agrega este console.log
            setSonusers(data.sonusersItems);
          })
          .catch((error) => console.error('Error al obtener sonusers:', error));
      }, []);

      const handleDeleteUser = (id, nombre_completo) => {
        const isConfirmed = window.confirm(`¿Estás seguro de eliminar a ${nombre_completo}?`);

        if (isConfirmed) {
            // Realiza la solicitud DELETE al backend
            fetch(`${apiUrl}/api-get-sonusers.php?id=${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if (response.ok) {
                    // Actualiza la lista de usuarios después de eliminar
                    setSonusers(sonusers.filter(user => user.id !== id));
                    console.log('Usuario eliminado correctamente');
                } else {
                    console.error('Error al eliminar usuario');
                }
            })
            .catch(error => console.error('Error al eliminar usuario:', error));
        }
    };
    
    

    
      return (
        <div className='sonusers-div'>
            <h1>Usuarios Registrados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Completo</th>
                        <th>Nombre de Usuario</th>
                        <th>Email</th>
                        <th>Rol</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {sonusers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.nombre_completo}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.rol}</td>
                            <button className='btn btn-danger'
                            onClick={() => handleDeleteUser(user.id, user.nombre_completo)}
                            >Eliminar</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default SonUsers;
