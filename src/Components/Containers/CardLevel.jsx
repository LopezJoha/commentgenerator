import React from 'react';
import '../../App.css';
import ClassNumber from '../ClassNumber';
import Performance from '../Performance';

export default function CardLevel(props) {
 
  return(
    <div className='cardLevel'>
        <h2 className='title border'>NIVEL: {props.levelName}</h2>
        <h2 className='title wave'>NIVEL: {props.levelName}</h2>
        <p className='p-main'>Selecciona el número de la clase:</p>
        <ul className='classNumber-Container'>
          {props.numberOfClass.map((numero)=>{            
            return(
              <ClassNumber 
                number={numero} 
                key={numero} 
                saveNumber={() =>props.saveNumberCard(numero)}
                isActive={props.activeNumber === numero}
              />
            );
          })}
        </ul>
        <p>Selecciona el desempeño del estudiante: </p>
        <div className='performanceContainer'>
          <Performance performance={"BUENO"} savePerformance ={()=>props.savePerfCard("Bueno")} isActive={props.activePerf === "Bueno"}/>
          <Performance performance={"MEDIO"} savePerformance ={()=>props.savePerfCard("Medio")} isActive={props.activePerf === "Medio"}/>
          <Performance performance={"BAJO"}  savePerformance ={()=>props.savePerfCard("Bajo")} isActive={props.activePerf === "Bajo"}/>
        </div>
    </div>
  )
}
