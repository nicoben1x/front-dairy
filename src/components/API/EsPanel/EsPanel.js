import './EsPanel.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../ApiConfig"
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function EsPanel() {

    const navigate = useNavigate(); // Obtiene la función de navegación

    
      return (
        <div className='espanel-div'>
            <h1>Panel</h1>
            <button className='tamano-btn btn btn-primary' onClick={() => navigate('/excelprecios')}>Actualizar Excel</button>
            <button className='tamano-btn btn btn-primary' onClick={() => navigate('/sonusers')}>Administrar Usuarios</button>

            
        </div>
    );
}


export default EsPanel;
