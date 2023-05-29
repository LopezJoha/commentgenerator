import React from 'react';
import  '../App.css'; 

export default function ClassNumber(props) {
  return (
    <div className={`classNumber ${props.isActive ? 'active' : ''}`} onClick={props.saveNumber} >
        <h3>
            {props.number}
        </h3>      
    </div>
  )
}
