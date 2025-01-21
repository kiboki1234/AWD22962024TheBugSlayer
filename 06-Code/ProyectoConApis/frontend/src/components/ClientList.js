import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import API from '../services/api';

const ClientList = () => {
  const [clients, setClients] = useState([]);

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

  return (
    <div>
      <h3>Lista de Clientes</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ClientList;
