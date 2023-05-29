import React from 'react';
import '../App.css';

export default function Performance(props) {
  return (
    <div className={`performance ${props.isActive ? 'active' : ''}`} onClick={props.savePerformance} >
        <h3>{props.performance}</h3>
    </div>
  )
}
