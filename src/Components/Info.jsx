import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '../App.css';

const customStyles = {
    content: {
      fontFamily: 'Fredoka',
      fontSize: '95%',
      padding: '2%',
      maxWidth:'80vw',
      maxHeight:'80vh',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',   
      backgroundColor: '#d2a6b9'
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.5)',
    },
     
};

export default function Info() {
    
    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);
    
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    
    const closeModal = () => {
        setShowModal(false);
    };

  return (
    <div className='info'>
      <img src={require('../assets/question.png')} alt='question' onClick={openModal} className='question-mark'/>
        <Modal 
          isOpen={showModal} 
          onRequestClose={closeModal}
          style={customStyles}
      >
          <img src={require('../assets/close.png')} alt='question' onClick={closeModal} className='close'/> 
          <h2 className='modal_mainText'>
            ¡Bienvenido a nuestra aplicación de generación 
            de comentarios estudiantiles!</h2>
          <h3 className='modal_title'>Descripción general de la aplicación:</h3>
          <p className='info_text'>Nuestra aplicación, es una plataforma en línea diseñada específicamente para ayudar a las profes a generar comentarios estudiantiles de manera rápida y efectiva. Ofrecemos una interfaz intuitiva y funcionalidades poderosas que simplificarán tu proceso de evaluación y retroalimentación.</p>

          <h3 className='modal_title'>Características y funcionalidades:</h3>

          <p className='info_text'>Banco de comentarios predefinidos: Accede a una amplia selección de comentarios predefinidos relacionados con diferentes aspectos del desempeño estudiantil, como habilidades académicas, participación en clase, trabajo en equipo, entre otros.</p>

          <p className='info_text'>Visualización y personalización de comentarios: Una vez generados los comentarios puedes dar click sobre cada uno de ellos para copiar y pegar. Personaliza los comentarios predefinidos para adaptarlos a las necesidades específicas de cada estudiante. Añade detalles adicionales o elimina secciones según sea necesario.</p>

          <p className='info_text'>Utiliza nuestra herramienta de generación automática de comentarios para obtener rápidamente una lista de comentarios personalizados para cada estudiante. Ahorra tiempo valioso y mantén la consistencia en tu retroalimentación.</p>
          <h3 className='modal_title'>Flujo de trabajo o proceso:</h3>
          <ol className='infoList'>
            <li>Selecciona el Nivel.</li>
            <li>Selecciona el número de la clase, en la que vas a generar la retroalimentación.</li>
            <li>Selecciona el performance del Estudiante, tienes 3 opciones Bueno Medio Bajo.</li> 
            <li>Explora los comentarios predefinidos relacionados con los aspectos seleccionados y personalízalos según sea necesario.</li>
            <li>Copia y pega.</li>
          </ol>

          <p className='info_text'>Compatibilidad con navegadores web modernos, como Google Chrome, Mozilla Firefox, Safari.</p>
          <p className='info_text'>Conexión a Internet estable para acceder y utilizar la aplicación en línea.</p>

          <p className='info_text'>Si tienes alguna pregunta, consulta, problema técnico o sugerencia para nuestros comentarios, no dudes en ponerte en contacto con nuestro equipo de soporte. Puedes enviar un correo electrónico a johasaron@gmail.com.</p>
                 
        </Modal>
    </div>
  )
}
