import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import API from '../services/api';

const Notification = () => {
  const [clients, setClients] = useState([]);
  const [clientId, setClientId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const { data } = await API.get('/clients');
        setClients(data);
      } catch (error) {
        alert('Error al cargar los clientes');
      }
    };
    fetchClients();
  }, []);

  const handleSendNotification = async (e) => {
    e.preventDefault();
    try {
      await API.post('/notifications', { clientId, message });
      alert('Notificación enviada');
      setMessage('');
      setClientId('');
    } catch (error) {
      alert('Error al enviar la notificación');
    }
  };

  return (
    <div>
      <h3>Enviar Notificación</h3>
      <Form onSubmit={handleSendNotification}>
        <Form.Group className="mb-3">
          <Form.Label>Seleccionar Cliente</Form.Label>
          <Form.Select
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          >
            <option value="">Seleccionar</option>
            {clients.map((client) => (
              <option key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje"
            required
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Enviar Notificación
        </Button>
      </Form>
    </div>
  );
};

export default Notification;
