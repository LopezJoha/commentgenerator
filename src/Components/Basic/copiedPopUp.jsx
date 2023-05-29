import React from 'react'
import '../../App.css';



export default function CopiedPopUp() {
    const popUpStyle = {
        position: "fixed",
        top:0,
        right:0,
        backgroundColor:'#9f6983',
        color:'white'
    }
  return (
    <div className='popup' style={popUpStyle}>
        <p style={{padding:10}}>El texto se ha copiado al portapapeles!</p>
    </div>
  )
}
