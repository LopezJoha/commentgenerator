import React from "react";

export default function Level(props){       
     
    return(
      <li className={`level ${props.isActive ? 'active' : ''}`} onClick={props.pasarFuncion}>  
            <h2 className='title border'>{props.levelName}</h2>
            <h2 className='title wave'>{props.levelName}</h2>
            <img src={props.src} alt={props.levelName} />            
      </li>
      );
}