import React, { useEffect, useState } from 'react';
import './Library.css';

import pdf01 from "../Library/img/1 rpm_a-11Ed.pdf";
import pdf02 from "../Library/img/2 rpm_b-11Ed milking accesorios.pdf";
import pdf03 from "../Library/img/03-Repair-Parts-Manual-Pipeline-Components-Accessories-Section-C-11th-edition.pdf";
import pdf04 from "../Library/img/04 Repair-Parts-Manual-Detachers-Section-D-11th-edition.pdf";
import pdf05 from "../Library/img/05 rpm_e-11Ed equipos de frio.pdf";
import pdf06 from "../Library/img/06rpm_f-11Ed bretes y puertas apartadoras.pdf";
import pdf07 from "../Library/img/07 step guardian, robot pusher.pdf";
import pdf08 from "../Library/img/08 rpm_h-11Ed equipos de chequeos.pdf";
import pdf09 from "../Library/img/09 rpm_i-11Ed rotativas.pdf";
import pdf10 from "../Library/img/10 rpm_j-11Ed-automatizacion.pdf";
import pdf11 from "../Library/img/11 rpm_k-9Ed scrayper.pdf";
import pdf12 from "../Library/img/Chapter 12 - ACR equipment.pdf";
import pdf13 from "../Library/img/FULL Repair Manual JOIN PDF 12.pdf";
import pdf14 from "../Library/img/indexmb_10Ed.pdf";
import pdf15 from "../Library/img/Repuestos Isolactor, vaso y cilindros o pistones.pdf";
import pdf16 from "../Library/img/repuestos mas comunes del vaso.pdf";
import pdf17 from "../Library/img/rpm_d-11Ed_153-154-SmartLite.pdf";






function Library() {

    return (
        <div>

            <h1>Libreria</h1>

            <div>
                <h3>Documentos</h3>
                <div className='div-library'>
                    <a href={pdf01} target="_blank">1 rpm_a-11Ed.pdf</a>
                    <a href={pdf02} target="_blank">2 rpm_b-11Ed milking accesorios.pdf</a>
                    <a href={pdf03} target="_blank">03-Repair-Parts-Manual-Pipeline-Components-Accessories-Section-C-11th-edition.pdf</a>
                    <a href={pdf04} target="_blank">04 Repair-Parts-Manual-Detachers-Section-D-11th-edition.pdf</a>
                    <a href={pdf05} target="_blank">05 rpm_e-11Ed equipos de frio.pdf</a>
                    <a href={pdf06} target="_blank">06rpm_f-11Ed bretes y puertas apartadoras.pdf</a>
                    <a href={pdf07} target="_blank">07 step guardian, robot pusher.pdf</a>
                    <a href={pdf08} target="_blank">08 rpm_h-11Ed equipos de chequeos.pdf</a>
                    <a href={pdf09} target="_blank">09 rpm_i-11Ed rotativas.pdf</a>
                    <a href={pdf10} target="_blank">10 rpm_j-11Ed-automatizacion.pdf</a>
                    <a href={pdf11} target="_blank">11 rpm_k-9Ed scrayper.pdf</a>
                    <a href={pdf12} target="_blank">Chapter 12 - ACR equipment.pdf</a>
                    <a href={pdf13} target="_blank">FULL Repair Manual JOIN PDF 12.pdf</a>
                    <a href={pdf14} target="_blank">indexmb_10Ed.pdf</a>
                    <a href={pdf15} target="_blank">Repuestos Isolactor, vaso y cilindros o pistones.pdf</a>
                    <a href={pdf16} target="_blank">repuestos mas comunes del vaso.pdf</a>
                    <a href={pdf17} target="_blank">rpm_d-11Ed_153-154-SmartLite.pdf</a>
  
                </div>
            </div>

        </div>
    );
}

export default Library;
