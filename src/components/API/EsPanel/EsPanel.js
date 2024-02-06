import './EsPanel.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { apiUrl } from "../ApiConfig"
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function EsPanel() {

    
      return (
        <div className='espanel-div'>
            <h1>Panel</h1>
            <button className='tamano-btn btn btn-primary'>Actualizar Excel</button>
            <button className='tamano-btn btn btn-primary'>Administrar Usuarios</button>

            
        </div>
    );
}


export default EsPanel;
