import React, { useEffect, useState } from 'react';
import "./ConsumirApi.css"
import { apiUrl } from './ApiConfig';


function ConsumirApi() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${apiUrl}/api-routes.php`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Combina los datos de productoss y químicos en una sola lista
        const combinedData = [...data.products, ...data.quimicos];
        setData(combinedData);
      })
      .catch((error) => console.error('Error al obtener los datos:', error));
  }, []);

  // Función para reemplazar 42 con "-"
  const replace42 = (value) => {
    if (value === 42 || value === "42") {
      return "-";
    }
    return value;
  };

  return (
    <div className='productosDivAPI'>
      <h1>Tabla de Productos y Químicos</h1>
      <input className='buscadorProd'
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Presentación</th>
            {/* <th >Precio Mayorista</th> */}
            {/* <th>Precio Minorista</th> */}
            {/* <th>Costo por Kilo</th> */}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) =>
              item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <tr key={index}>
                <td>{item.code}</td>
                <td>{replace42(item.description)}</td>
                <td>{item.presentation}</td>
                {/* 
                <td>{replace42(item.dealerPrice)}</td>
                <td>{replace42(item.retailPrice)}</td>
                <td>{item.costoKilo === 42 ? "0" : item.costoKilo || ""}</td>
                */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsumirApi;
