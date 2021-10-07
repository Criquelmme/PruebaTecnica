import './Persona.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {  useEffect, useState } from 'react';
import PersonService from '../services/PersonService';
import{Table, Button, Container, Modal, ModalBody, ModalHeader, FormGoup, ModalFooter } from 'reactstrap';




function Persona() {

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  const state = {
    datos: []
    }


  useEffect(() => {
    PersonService.getPersons().then(
      result => {
        state.datos = result;
        console.log(state.datos)
      }
    )
  }, []);


  return (
    <div class="container">
      <div class="title-box">
        <h1>Mantenedor de Personas</h1>
      </div> 
      <button class="btn btn-primary btn-nueva" href="d" onClick={openModal}><b>+</b> Añadir Persona </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Crear Persona</h2>
        <button onClick={closeModal}>Cerrar</button>
        <form>
          <label>Nombre</label>
          <input />
       
        </form>
        <button onClick={closeModal}>Crear Usuario</button>

      </Modal>

    </div>

    
  );
}

export default Persona;
