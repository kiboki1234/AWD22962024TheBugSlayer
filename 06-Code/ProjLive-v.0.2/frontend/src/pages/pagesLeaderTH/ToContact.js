import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../api';

const UserMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          setError("No estás autenticado. Inicia sesión para ver los mensajes.");
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/contact/messages`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setMessages(response.data);
      } catch (error) {
        setError("Error al obtener los mensajes. Intenta nuevamente más tarde.");
        console.error('Error al obtener los mensajes:', error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container pt-4 mt-4">
      <h1 className="text-center">Mensajes de Contacto</h1>
      {error && <p className="text-danger text-center">{error}</p>}
      <ul className="list-group">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <li key={index} className="list-group-item">
              <h5>{message.name}</h5>
              <p><strong>Teléfono:</strong> {message.phone}</p>
              <p><strong>Mensaje:</strong> {message.message}</p>
              <p><small><strong>Enviado el:</strong> {new Date(message.createdAt).toLocaleString()}</small></p>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">No hay mensajes de contacto.</li>
        )}
      </ul>
    </div>
  );
};

export default UserMessages;
