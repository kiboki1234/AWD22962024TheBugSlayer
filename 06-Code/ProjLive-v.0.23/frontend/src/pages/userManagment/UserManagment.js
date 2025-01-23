import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../common/Footer";
import API_BASE_URL from "../../api";

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        student_id: "",
        phone: "",
        creatorId: "currentCoordinatorId" // Debería ser el ID real del coordinador
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/users/all`);
            setUsers(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/api/users/create`, newUser);
            setUsers([...users, response.data.user]);
            setNewUser({
                name: "",
                email: "",
                password: "",
                role: "",
                student_id: "",
                phone: "",
                creatorId: "currentCoordinatorId"
            });
        } catch (error) {
            console.error("Error al crear usuario:", error);
        }
    };

    return (
        <>
            <div className="container mt-4">
                <h1 className="mb-4">Gestión de Usuarios</h1>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2>Crear Usuario</h2>
                        <form onSubmit={handleCreateUser}>
                            <input type="text" name="name" placeholder="Nombre" value={newUser.name} onChange={handleInputChange} className="form-control mb-3" required />
                            <input type="email" name="email" placeholder="Correo Electrónico" value={newUser.email} onChange={handleInputChange} className="form-control mb-3" required />
                            <input type="password" name="password" placeholder="Contraseña" value={newUser.password} onChange={handleInputChange} className="form-control mb-3" required />
                            <select name="role" value={newUser.role} onChange={handleInputChange} className="form-control mb-3" required>
                                <option value="">Seleccionar Rol</option>
                                <option value="president">Presidente</option>
                                <option value="vice_president">Vicepresidente</option>
                                <option value="leader">Líder</option>
                                <option value="member">Miembro</option>
                            </select>
                            <input type="text" name="student_id" placeholder="ID de Estudiante" value={newUser.student_id} onChange={handleInputChange} className="form-control mb-3" required />
                            <input type="text" name="phone" placeholder="Teléfono" value={newUser.phone} onChange={handleInputChange} className="form-control mb-3" required />
                            <button type="submit" className="btn btn-primary w-100">Crear Usuario</button>
                        </form>
                    </div>

                    <div className="col-md-6 mb-4">
                        <h2>Usuarios Existentes</h2>
                        <ul className="list-group">
                            {users.length > 0 ? (
                                users.map(user => (
                                    <li key={user._id} className="list-group-item">
                                        {user.name} - {user.role}
                                    </li>
                                ))
                            ) : (
                                <p className="text-muted">No hay usuarios registrados.</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserManagement;
